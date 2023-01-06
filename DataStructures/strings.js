// The JavaScript strings
const username = 'dukelester';
console.log(username.charAt(0), username.at(0));
const substr = username.substring(0, 3);
console.log(substr);
console.log(username.slice(2, 5));
const a = 'a';
const b = 'dfgh';
console.log(a < b);

// String search
console.log(username.indexOf('les'));
console.log('Red Dragon'.indexOf('Red'));
const myDragon = 'The Red Dragon of China';
console.log(myDragon.indexOf('red'));
console.log(myDragon.indexOf('Red'), myDragon.indexOf(' '));

const validEmail = (email) => {
  if (typeof email !== 'string') return 'Invalid email';
  if (email.length < 5) return 'Email too short!';
  if (email.indexOf('@') === -1) return 'Email invalid!';
  if (email.indexOf(username) !== -1) return 'email must not contain the username';
  return email;
};

console.log(validEmail(234));
console.log(validEmail('lester'));
console.log(validEmail('lester@gmail.com'));

const searchForString = (word, str) => word.indexOf(str) !== -1;
console.log(searchForString('duke lester', 'duke'));

const sentence = 'Duke lester is a great programmer 3030263';
console.log(sentence.split(' '));
console.log(sentence.replace('lester', 'Dlester'));
console.log(sentence.match(/[e, a, k]/g));
console.log(sentence.match(/D/i));
console.log(sentence.match(/^D/));
console.log(sentence.match(/[duke]/ig), 'here');
console.log(sentence.match(/[0-9]/g));
console.log(sentence.match(/[^d|k]/gi));
console.log(sentence.search(/[^d|k]/gi));
console.log(sentence.search(/Duke/));
console.log('here', sentence.match(/\d+/)); // Any Numeric Characters
console.log(sentence.match(/^\d+$/));
const numbers = '567890';
// /^\d+$/ ==> numeric only
console.log(numbers.match(/^\d+$/)); // Numeric only characters
// /^[0-9]*.[0-9]*[1-9]+$/ => floating point numbers
const myFloat = (Math.random() * 10).toString();
console.log(myFloat);
console.log(myFloat.match(/^[0-9]*.[0-9]*[1-9]+$/));

//  /[a-zA-Z0-9]  Only Alphanumeric Characters
console.log(myFloat.match(/[a-zA-Z0-9]/));
console.log(sentence.match(/[a-zA-Z0-9]/g));
