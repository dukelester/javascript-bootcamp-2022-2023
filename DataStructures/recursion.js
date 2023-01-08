/**
 * Recursion
 * a recursive function is a function that calls itself
 * Recursive functions are often elegant and solve complex problems through the “divide-­
 * and-­conquer” method
 *
 * Rules of Recursion
 * When recursive functions are implemented incorrectly, it causes fatal issues because the
program will get stuck and not terminate. Infinite recursive calls result in stack overflow.
Stack overflow is when the maximum number of call stacks of the program exceeds the
limited amount of address space (memory).
 *
 * Base Case
In recursion, there must be a base case (also referred to as terminating case). Because
recursive methods call themselves, they will never stop unless this base case is reached.
Stack overflow from recursion is most likely the result of not having a proper base case.
In the base case, there are no recursive function calls.
  * Divide-and-Conquer Method
   * the divide-and-conquer method is when a problem is solved by
   * solving all of its smaller components
   *
 */

const countDownToZero = (number) => {
  if (number < 0) { // Base case
    return; // stop the function
  }
  console.log(number);
  countDownToZero(number - 1);
};
// countDownToZero(100);

// The fibonacci of a number => number - 1 + number - 2
const fibonacci = (number) => {
  if (number <= 1) { // Base case
    return number;
  }
  return fibonacci(number - 1) + fibonacci(number - 2); // time complexity of O(2n)
};
console.log(fibonacci(4));
console.log(fibonacci(10));
console.log(fibonacci(16));
