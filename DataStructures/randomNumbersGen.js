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
