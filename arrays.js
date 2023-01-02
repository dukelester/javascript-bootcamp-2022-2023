/* eslint-disable no-console */
// The Js Arrays

/** Describe what arrays are and their uses ==> An ordered collection
 *  of values(elements) ==> list
 * Create nrw arrays
 * access elements in the arrays
 * store elemnts in variables
 * use common array methods
 */

const evenNumbers = [4, 6, 8, 10, 4];
console.log(evenNumbers);
const colors = ['yellow', 'green', 'blue', 'red',
  'orangered', 'maroon', 'pink'];
console.log(colors, colors[0], colors[3], colors[-1]);
colors[7] = 'magenta';
console.log(colors);
const myColor = colors[5];
console.log(myColor);

// Array methods
colors.push('black');
console.log(colors);

colors.pop();
console.log(colors);
const planets = ['mars'];
console.log(
  planets.push('Earth'),
  planets.push('Saturn'),
  planets.push('Venus'),
);
console.log(planets.pop());

console.log(planets.unshift('Mercury'));
planets.unshift('Pluto');
planets.unshift('Neptune');

console.log(planets.shift(), '_-----shift');
console.log(planets);

const planetesColors = planets.concat(colors);
console.log(planetesColors);
let names = ['jane', 'kamau'];
names = names.concat(['monica', 'mangi', 'kin']);
console.log(names);
const joinedNames = names.join(' and ');
console.log(joinedNames);

console.log(
  names.indexOf('jane'),
  names.indexOf('kin'),
  planets.indexOf('Mars'),
);
console.log(planets.includes('mars'), planetesColors.includes('red'));
const reversedPlanets = planets.reverse();
console.log(reversedPlanets);
const sortedNames = names.sort();
console.log(sortedNames);
console.log([23, 44, 1, 45, 'kenny', 67, 90, 35, 80, 'lester'].sort());
console.log(planets.at(2), planets.at(0));

// A function which returns the last item of a given array
function getLastElement(array) {
  /**
  * A simple function
  */
  // return array[array.length - 1];
  return array.at(-1);
}

console.log(getLastElement(names), names.at(-1));
const numsLetters = [23, 44, 113, 44];
const newNums = numsLetters.concat(23, [23, 90, 44]);
console.log(numsLetters, '\n', newNums);
console.log(numsLetters.entries().next().value, '\n\n');

function isEvenNumber(number) {
  return number % 2 === 0;
}
const someEvenNumbers = [20, 44, 20, 40];
console.log(numsLetters.every(isEvenNumber));
console.log(someEvenNumbers.every(isEvenNumber));

console.log(someEvenNumbers.every((element) => element % 2 === 0));
console.log(someEvenNumbers.every((element) => element % 2 === 0));

const found = planetesColors.filter((planet) => planet === 'mars');
console.log(found);
console.log(planetesColors.filter((planet) => planet.length > 6));
planetesColors.unshift('Lester', 'dlester', 'done');
console.log(planetesColors);
planetesColors.push('Ken', 'duke', 'john', 'kenkom');
console.log(planetesColors);
planetesColors.reverse();
console.log(planetesColors);
console.log(planetesColors.slice(-2), planetesColors.slice(-3));
planetesColors.splice(1, 0, 'dlesterdlester');
console.log(planetesColors);
planetesColors.splice(-1, 2);
console.log(planetesColors.splice(3, 2));
console.log(planetesColors);
planetesColors.sort();
console.log(planetesColors);

const nums = [90, 2, 67, 9, 33, 112];
console.log(nums.sort());

// Sample exercise

let people = ['Greg', 'Mary', 'Devon', 'James'];
console.log(people.shift(), people);
console.log(people.pop(), people);
people.unshift('Matt');
console.log(people);
people.push('duke lester');
console.log(people);
console.log(people.slice(2));
console.log(people.indexOf('Mary'), people.indexOf('Foo'));

people = ['Greg', 'Mary', 'Devon', 'James'];
people.splice(2, 1, 'Elizabeth', 'Artie');
console.log(people);
const withBob = people.concat('Bob');
console.log(withBob);

const marks = [34, 67, 90, 77, 89];
console.log(marks);
