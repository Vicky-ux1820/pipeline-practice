const calculateTax = require('./tax-calc');

describe('Tax Calculator', () => {
  test('calculates tax correctly for positive values', () => {
    const result = calculateTax(100, 10); // 10% tax
    expect(result).toBe(110); // 100 + 10% of 100 = 110
  });

  test('returns the same amount if tax rate is 0', () => {
    const result = calculateTax(100, 0);
    expect(result).toBe(100); // No tax added
  });

  test('throws an error if amount is negative', () => {
    expect(() => calculateTax(-100, 10)).toThrow("Amount and tax rate must be non-negative");
  });

  test('throws an error if tax rate is negative', () => {
    expect(() => calculateTax(100, -10)).toThrow("Amount and tax rate must be non-negative");
  });
});
