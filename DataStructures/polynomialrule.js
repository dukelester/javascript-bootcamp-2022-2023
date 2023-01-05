/**
 * Polynomial Rule: “Big-O to the Power of k”
 *The polynomial rule states that polynomial time complexities have a Big-O notation of
the same polynomial degree.
 *If f(n) is a polynomial of degree k, then f(n) is O(n^k).
 */

const polynomialRule = (n) => {
  let count = 0;
  for (let k = 0; k < n * n; k += 1) {
    count += 1; // runs n * n iterations
  }
  return count;
};

console.log(polynomialRule(10));
