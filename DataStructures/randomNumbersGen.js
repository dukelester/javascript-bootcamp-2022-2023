// The Random Number Generator
/**
 *Random number generation is important to simulate conditions. JavaScript has a built-­in
 *function for generating numbers: Math.random()
 Math.random() returns a float between 0 and 1
 * To get random integers, simply use Math.floor(), Math.round(), or Math.ceil() to
    round to an integer.
 */

console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 25 + 5));

const modularExponentiation = (base, exponent, modulus) => (base ** exponent) % modulus;
console.log(modularExponentiation(2, 3, 2));
console.log(modularExponentiation(9, 10, 7));

const modularExponentiationImproved = (base, exponent, modulus) => {
  if (modulus === 1) return 0;
  let value = 1;
  for (let k = 0; k < exponent; k += 1) {
    value = (base * value) % modulus;
  }
  return value;
};

console.log(modularExponentiationImproved(20, 3, 2));
console.log(modularExponentiationImproved(2, 8, 20));

// Print all primes less than n
const isPrime = (number) => {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;
  for (let k = 5; k * k <= number; k += 6) {
    if (number % k === 0 || number % (k + 2) === 0) return false;
  }
  return true;
};

console.log(isPrime(9), isPrime(2), isPrime(7));
const primeNumbersLessThanN = (number) => {
  for (let k = 0; k < number; k += 1) {
    if (isPrime(k)) {
      console.log(k); // Time Complexity: O(nsqrt(n))
    }
  }
};

primeNumbersLessThanN(78);
primeNumbersLessThanN(12);
console.log(Number.EPSILON);
