let name = 'John';

function sayHi() {
  console.log(`Hi ${name}`);
}

name = 'lester';
sayHi();

function makeCounter() {
  let count = 0;
  return function () {
    return count++; // has access to the outer "count"
  };
}
const counting = makeCounter();

console.log(makeCounter()());
console.log(makeCounter()());
console.log(counting());

(function (area) {
  console.log(area);
}(12));

setTimeout(() => {
  console.log('my full name');
}, 1000);

setInterval(() => {
  console.log('Give me a function...');
}, 3000);

const getFullName = (names) => console.log('duke lester', names);
setInterval(getFullName, 3000, 'ja');
