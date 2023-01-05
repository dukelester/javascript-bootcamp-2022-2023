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
