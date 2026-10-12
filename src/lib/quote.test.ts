import { describe, it, expect } from "vitest";
import { calculateQuote } from "./quote";

describe("calculateQuote", () => {
  it("adds 16% VAT on the amount after discount when VAT is on", () => {
    const r = calculateQuote([{ unitPrice: 10000, quantity: 1 }], 10, true);
    expect(r.taxable).toBe(9000);
    expect(r.vatAmount).toBe(1440);
    expect(r.total).toBe(10440);
  });

  it("adds no VAT when the toggle is off", () => {
    const r = calculateQuote([{ unitPrice: 5000, quantity: 2 }], 0, false);
    expect(r.vatAmount).toBe(0);
    expect(r.total).toBe(10000);
  });
});
