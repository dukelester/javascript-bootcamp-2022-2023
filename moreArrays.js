// The spread operator ...rest

const names = ['duke', 'lester', 'dlester', 'dukelester'];
const marks = [23, 45, 78, 90, 60, 78];

const combined = [...names, ...marks];
console.log(combined);
console.log(Math.max(marks));
const fullName = 'duke lester dlester';
console.log([...fullName]);
const arrayFromStr = Array.from(fullName);
console.log(arrayFromStr);
