// The Javacript Numbers
const isPrime = (number) => {
  if (number < 1) {
    return false;
  }
  for (let num = 2; num < number; num += 1) {
    if (number % num === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(-2), isPrime(72));
console.log(isPrime(2), isPrime(7));

const isPrimeImproved = (number) => {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;
  for (let k = 5; k * k < number; k += 6) {
    if (number % k === 0 || number % (k + 2) === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrimeImproved(2), isPrimeImproved(20), isPrimeImproved(6), isPrimeImproved(9));
console.log(isPrimeImproved(99), isPrimeImproved(57));
