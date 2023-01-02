// The map is a datastructure to hold data in a key value pair. The keys can be of any type.

const myMap = new Map();
console.log(myMap);
myMap.set('name', 'dukelester');
console.log(myMap);
myMap.set('age', 23);
myMap.set('location', 'juja');
console.log(myMap, myMap.size, 'the number of elements in the map');
const myLocation = myMap.get('location');
console.log(myLocation);
console.log(myMap.has('kiambu'), myMap.has('location'));
myMap.delete('age');
console.log(myMap);
myMap.clear();
console.log(myMap);
console.log(myMap.size);
myMap.set(23, 'June');
console.log(myMap, myMap.get(23));
console.log(myMap.keys(), myMap.values());

const vegetables = new Map([
  ['onions', 90],
  ['kales', 56],
  ['tomatoes', 20],
  ['spinach', 34],
]);

console.log(vegetables);
// for (let vegetable of vegetables.keys()){
//   console.log(vegetable);
// };
vegetables.forEach((vegetable, value) => console.log(value, vegetable, '\n'));
vegetables.forEach((value, key) => console.log(key.toUpperCase(), value));

const setOfEvenNumbers = new Set();
const setOfOddNumbers = new Set();

function isPrime(number) {
  for (let k = 2; k < number; k += 1) {
    if (number % k === 0) return;
    setOfOddNumbers.add(number);
  }
}

for (let i = 0; i <= 200; i += 1) {
  if (i % 2 === 0) {
    setOfEvenNumbers.add(i);
  }
  isPrime(i);
}
console.log(setOfEvenNumbers, setOfOddNumbers);
console.log(setOfEvenNumbers.has(188), setOfOddNumbers.has(2), setOfEvenNumbers.has(2));
setOfEvenNumbers.delete(190);
console.log(setOfEvenNumbers.size);
setOfEvenNumbers.clear();
console.log(setOfEvenNumbers, setOfEvenNumbers.size);
setOfOddNumbers.forEach((num) => console.log(num));
