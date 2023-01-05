/**
 * Product Rule: “Multiply Big-Os”
 * The product rule simply states how Big-Os can be multiplied.
 * If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)g(n) is O(h(n)p(n))
 */

const productRule = (n) => {
  let count = 0;
  for (let k = 0; k < n; k += 1) {
    count += 1;
    for (let m = k; m < 5 * n; m += 1) {
      count += 1;
    }
  }
  return count;
};
console.log(productRule(10));
