function summation(num1, num2) {
  return num1 + num2;
}

function calculateTaxes(income) {
    if (income > 40000) {
        return income * 0.25;
    } else {
        return income * 0.15;
    }
}

module.exports = { summation, calculateTaxes };

