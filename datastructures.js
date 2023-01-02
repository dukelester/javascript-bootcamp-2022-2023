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

const marks = [
    ['john', 90], ['mark', 89], ['ken', 12], ['mary', 90],
];
const marksMap = new Map(marks);
console.log(marksMap);
marksMap.set('Elven', 78).set('Moses', 78).set('Peter', 89);
console.log(marksMap);
console.log(marksMap.has('ken'));
const keys = marksMap.keys();
console.log('keys', keys, [...keys]);
marksMap.clear();
console.log(marksMap);