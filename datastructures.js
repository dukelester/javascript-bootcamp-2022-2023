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

// Iterating over a map
// Maps are always ordered the way the elements are added
const grades = [
    ['john', 90], ['mark', 89], ['ken', 12], ['mary', 90],
];
const gradesMap = new Map(grades);
const gradesMapLength = gradesMap.size;
console.log(gradesMapLength);

for(let [key, value] of gradesMap) {
    console.log(key , '=> ', value);
}

gradesMap.forEach((value, key) => {
    console.log(key, '::=> ', value);
});

// The SET ==> collection of unique values
const emptySet = new Set();
console.log(emptySet);
const setOfGrades = new Set(grades);
console.log(setOfGrades);
const nameSet = new Set('duke lester dlester dlester duke lester');
console.log(nameSet); // Set from a string => strings are iterables
const evenNumbers = new Set([90, 30, 24, 6, 4]);
console.log(evenNumbers);
evenNumbers.add(90).add(80).add(60).add(4);
console.log(evenNumbers);