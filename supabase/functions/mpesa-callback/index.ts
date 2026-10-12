import { createClient } from "npm:@supabase/supabase-js@2";

Deno.serve(async (req) => {
  try {
    const body = await req.json();
    const cb = body?.Body?.stkCallback;
    if (!cb?.CheckoutRequestID) return new Response("ignored", { status: 200 });
    const items: { Name: string; Value?: unknown }[] = cb.CallbackMetadata?.Item ?? [];
    const receipt = items.find((i) => i.Name === "MpesaReceiptNumber")?.Value as string | undefined;
    const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
    await admin.from("mpesa_payments").update({
      status: cb.ResultCode === 0 ? "paid" : "failed",
      result_desc: String(cb.ResultDesc ?? "").slice(0, 200),
      mpesa_receipt: receipt ?? null,
    }).eq("checkout_request_id", cb.CheckoutRequestID).eq("status", "pending");
  } catch (_) { /* always ack */ }
  return new Response(JSON.stringify({ ResultCode: 0, ResultDesc: "Accepted" }), {
    headers: { "Content-Type": "application/json" },
  });
});
