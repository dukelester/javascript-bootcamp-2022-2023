/**
 * Sum Rule: “Add Big-Os Up”
 * The sum rule is intuitive to understand; time complexities can be added. Imagine a
    master algorithm that involves two other algorithms. The Big-O notation of that master
    algorithm is simply the sum of the other two Big-O notations.
    If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)+g(n) is O(h(n)+p(n)).
    **** Remember to apply the coefficient rule after applying this rule ****
 *
*/

const sumRuleExample = (n) => {
  let count = 0;
  for (let k = 0; k < n; k += 1) {
    count += 1; // => complexity of O(n)
  }
  for (let m = 0; m < (5 * n); m += 1) {
    count += 1; // => complexity of O(5n)
  }
  return count;
};
// Total complexity = O(n) + O(5n) => O(6n) => O(n) as we neglect the coefficient
console.log(sumRuleExample(10));
