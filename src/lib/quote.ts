export const VAT_RATE = 0.16;

export interface QuoteLine { unitPrice: number; quantity: number }

export function calculateQuote(lines: QuoteLine[], discountPercent: number, vatEnabled: boolean) {
  const subtotal = lines.reduce((s, l) => s + l.unitPrice * l.quantity, 0);
  const pct = Math.min(100, Math.max(0, discountPercent));
  const discountAmount = Math.round(subtotal * pct) / 100;
  const taxable = subtotal - discountAmount;
  const vatAmount = vatEnabled ? Math.round(taxable * VAT_RATE * 100) / 100 : 0;
  return { subtotal, discountAmount, taxable, vatAmount, total: taxable + vatAmount };
}
