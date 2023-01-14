console.log('Welcome to the Typescript language, a superset of JS');
const number = 56;
console.log(number);

const user = {
  name: 'duke lester',
  age: 56,
};
console.log(user);
const word: string = 'I am improving on my skills';
console.log(word.toLocaleUpperCase());

console.log(number.valueOf(), number.toFixed(2), number.toExponential());

function greet(person: string, date: Date) {
  console.log(`Hello ${person} and the time is ${date.toDateString()}`);
};

greet('duke lester', new Date());

let message = 'I am the message here, please listen';
console.log(message);