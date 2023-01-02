// The map ==> key value storage where the key can be any data type
const myMap = new Map();
console.log(myMap);
myMap.set(23, 'duke lester');
myMap.set('age', 60);
console.log(myMap);

const add = (x, y) => x + y;
const mult = (x, y) => x * y;

const functionCalls = new Map();
functionCalls.set(add, 0);
functionCalls.set(mult, 0);
console.log(functionCalls);