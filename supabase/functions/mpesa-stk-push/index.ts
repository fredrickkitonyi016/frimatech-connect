import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "npm:zod@3";
import { getAccessToken, MPESA_BASE, normalizePhone, timestampAndPassword } from "../_shared/mpesa.ts";

const Body = z.object({
  phone: z.string().min(9).max(15),
  amount: z.number().int().min(1).max(150000),
  reference: z.string().trim().min(1).max(12),
  description: z.string().trim().max(100).optional(),
});

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const parsed = Body.safeParse(await req.json());
    if (!parsed.success) return json({ error: "Invalid payment details" }, 400);
    const phone = normalizePhone(parsed.data.phone);
    if (!phone) return json({ error: "Enter a valid Safaricom M-Pesa number (07XX or 01XX)" }, 400);
    const { amount, reference, description } = parsed.data;

    const token = await getAccessToken();
    const { ts, shortcode, password } = timestampAndPassword();
    const callback = `${Deno.env.get("SUPABASE_URL")}/functions/v1/mpesa-callback`;

    const res = await fetch(`${MPESA_BASE}/mpesa/stkpush/v1/processrequest`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        BusinessShortCode: shortcode,
        Password: password,
        Timestamp: ts,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: phone,
        PartyB: shortcode,
        PhoneNumber: phone,
        CallBackURL: callback,
        AccountReference: reference,
        TransactionDesc: description || "Frimat payment",
      }),
    });
    const data = await res.json();
    if (!res.ok || data.ResponseCode !== "0") {
      return json({ error: data.errorMessage || data.ResponseDescription || "M-Pesa request failed" }, 502);
    }

    const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
    const { data: row, error } = await admin.from("mpesa_payments").insert({
      phone, amount, account_reference: reference, description,
      checkout_request_id: data.CheckoutRequestID, merchant_request_id: data.MerchantRequestID,
    }).select("id").single();
    if (error) throw error;

    return json({ paymentId: row.id, message: data.CustomerMessage });
  } catch (e) {
    return json({ error: e instanceof Error ? e.message : "Unexpected error" }, 500);
  }
});
