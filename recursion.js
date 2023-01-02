// The function calling itself

function power(number, n) {
  let result = 1;
  for (let i = 0; i < n; i += 1) {
    result *= number;
  }
  return result;
}

console.log(power(3, 2));

// The recursion
function powerWithRecursion(number, m) {
  if (m === 1) { // The obvious base condition
    return number;
  }
  return number * powerWithRecursion(number, m - 1); // The recursive step
}

console.log(powerWithRecursion(2, 2));

function pow(number, n) {
  return (n === 1) ? number : number * power(number, n - 1);
}
console.log(pow(3, 2));
