function calculateTax(amount, taxRate) {
    if (amount < 200 || taxRate < 0) {
      throw new Error("Amount and tax rate must be non-negative");
    }
    return amount + amount * (taxRate / 100);
  }
  
  module.exports = calculateTax;
  