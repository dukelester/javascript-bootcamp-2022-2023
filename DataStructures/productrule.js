/**
 * Product Rule: “Multiply Big-Os”
 * The product rule simply states how Big-Os can be multiplied.
 * If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)g(n) is O(h(n)p(n))
 */

const productRule = (n) => {
  let count = 0;
  for (let k = 0; k < n; k += 1) {
    count += 1; // compelxity of O(n)
    for (let m = k; m < 5 * n; m += 1) {
      count += 1; // compelxity of O(5n)
    }
  }
  return count;
};
console.log(productRule(10));
/**
 *  f(n) = 5n*n because line 7 runs 5n times for a total of n iterations.
Therefore, this results in a total of 5n2 operations. Applying the coefficient rule, the result
is that O(n)=n2.
 */
