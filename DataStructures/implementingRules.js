/**
 * Coefficient Rule: “Get Rid of Constants”
 * If f(n) is O(g(n)), then kf(n) is O(g(n)), for any constant k > 0.
This means that both 5f(n) and f(n) have the same Big-O notation of O(f(n)).
 */

// time complexity of O(n)
const linearComplexity = (number) => {
  let count = 0;
  for (let k = 0; k < number; k += 1) {
    count += k;
  }
  return count;
};

console.log(linearComplexity(89));

const coefficientRule = (number) => {
  let summation = 0;
  for (let k = 0; k < (10 * number); k += 1) {
    summation += k;
  }
  return summation;
};
console.log(coefficientRule(20)); // number == 200 ==> O(n)

const exmple2 = (number) => {
  let count = 0;
  for (let k = 0; k < number; k += 1) {
    count += 1;
  }
  count += 3; // Additional step
  return count;
};

console.log(exmple2(10));
