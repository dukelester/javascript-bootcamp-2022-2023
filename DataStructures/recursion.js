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
countDownToZero(100);

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

/**
 * Fibonacci Sequence: Tail Recursion
A tail recursive function is a recursive function in which the recursive call is the last
executed thing in the function
 */
const tailRecursionFib = (number, lastlast, last) => {
  if (number === 0) {
    return lastlast;
  }
  if (number === 1) {
    return last;
  }
  return tailRecursionFib(number - 1, last, lastlast + last); // tail recursion
};

console.log(tailRecursionFib(10, 0, 2));

// Pascal's Triangle
/**
 * Pascal’s triangle is a triangle whose element value is the summation of its top two (left
 * and right) values
 * Base case: The base case for Pascal’s triangle is that the top element (row=1, col=1)
is 1. Everything else is derived from this fact alone. Hence, when the column is 1, return 1,
and when the row is 0, return 0.
 * Divide and conquer: By the mathematical definition of Pascal’s triangle, a term of
Pascal’s triangle is defined as the sum of its upper terms. Therefore, this can be expressed as
the following: pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1).
 */

const pascalTriangle = (row, col) => {
  if (col === 0) {
    return 1;
  }
  if (row === 0) {
    return 0;
  }
  return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);
};

console.log('pascals triangle');
console.log(pascalTriangle(5, 2));
console.log(pascalTriangle(3, 2));
console.log(pascalTriangle(14, 8));

// CONVERT DECIMAL (BASE 10) TO BINARY NUMBER
/**
 * To do this, keep dividing the number by 2 and each time calculate the modulus (remainder)
and division.
Base case: The base case for this problem is when the n is less than 2. When it is less
than 2, it can be only 0 or 1.
 */
const base10ToString = (number) => {
  let binaryString = '';
  const base10ToStringHelper = (number) => {
    if (number < 2) {
      binaryString += number;
    } else {
      base10ToStringHelper(Math.floor(number / 2));
      base10ToStringHelper(number % 2);
    }
  };
  base10ToStringHelper(number);
  return binaryString;
};

console.log(base10ToString(232));
console.log(base10ToString(2));
console.log(base10ToString(34567890));

// PRINT ALL PERMUTATIONS OF AN ARRAY
/**
 * The premise of the problem is to swap elements of the array in every possible position
 * Base case: beginIndex is equal to endIndex. When this occurs, the function should print
 *  the current permutation.
 * Permutations: We will need a function to swap elements:
 */

const swapElements = (strArray, index1, index2) => {
  const temp = strArray[index1];
  strArray[index1] = strArray[index2];
  strArray[index2] = temp;
};

const permutations = (strArray, begining, end) => {
  if (begining === end) {
    console.log(strArray);
  }
  for (let k = begining; k < end + 1; k += 1) {
    swapElements(strArray, begining, k);
    permutations(strArray, begining + 1, end);
    swapElements(strArray, begining, k);
  }
};

const permuteArray = (stringArray) => {
  permutations(stringArray, 0, stringArray.length - 1);
};

permuteArray(['A', 'C', 'D']);
permuteArray('duke'.split(''));

// WRITE A PROGRAM THAT RECURSIVELY DETERMINES IF A STRING IS A PALINDROME
/**
 * A palindrome is a word spelled the same backward and forward such as deified,
 * racecar, testset, and aibohphobia (the fear of palindromes).
 */

const isPalindromeHelper = (word, beginPos, endPos) => {
  if (beginPos >= endPos) {
    return true;
  }
  if (word.at(beginPos) !== word.at(endPos)) {
    return false;
  }
  return isPalindromeHelper(word, beginPos + 1, endPos - 1);
};

const isPalindromeRecursive = (word) => isPalindromeHelper(word, 0, word.length - 1);
console.log(isPalindromeRecursive('duke'));
console.log(isPalindromeRecursive('testset'));
console.log(isPalindromeRecursive('racecar'));
console.log(isPalindromeRecursive('aibohphobia'));
console.log(isPalindromeRecursive('master'));
