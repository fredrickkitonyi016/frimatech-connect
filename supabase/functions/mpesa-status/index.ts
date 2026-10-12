import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "npm:zod@3";
import { getAccessToken, MPESA_BASE, timestampAndPassword } from "../_shared/mpesa.ts";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  const parsed = z.object({ paymentId: z.string().uuid() }).safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return json({ error: "Invalid payment id" }, 400);
  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data: row } = await admin.from("mpesa_payments")
    .select("status, result_desc, mpesa_receipt, checkout_request_id, created_at")
    .eq("id", parsed.data.paymentId).maybeSingle();
  if (!row) return json({ error: "Payment not found" }, 404);

  // Fallback: ask Daraja directly if the callback hasn't arrived after 20s
  if (row.status === "pending" && Date.now() - new Date(row.created_at).getTime() > 20000) {
    try {
      const token = await getAccessToken();
      const { ts, shortcode, password } = timestampAndPassword();
      const res = await fetch(`${MPESA_BASE}/mpesa/stkpushquery/v1/query`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ BusinessShortCode: shortcode, Password: password, Timestamp: ts, CheckoutRequestID: row.checkout_request_id }),
      });
      const q = await res.json();
      if (q.ResultCode !== undefined) {
        const status = String(q.ResultCode) === "0" ? "paid" : "failed";
        await admin.from("mpesa_payments").update({ status, result_desc: q.ResultDesc }).eq("id", parsed.data.paymentId);
        return json({ status, message: q.ResultDesc });
      }
    } catch (_) { /* still processing */ }
  }
  return json({ status: row.status, message: row.result_desc, receipt: row.mpesa_receipt });
});
