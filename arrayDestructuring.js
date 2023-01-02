// The array destructuring
console.log('Welcome to the array destructuring in js...');
const people = ['lester', 'dlester', 'monicah'];
console.log(people[0], people[1], people[2]);
const [lester, dlester, moni] = people;
console.log(lester, dlester, moni);
const fullName = ['duke', 'lester'];
const [firstName, lastName] = fullName;
console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1));
console.log(firstName.toUpperCase(), lastName.toUpperCase());

const [phone, username] = '0799443070 dukelester'.split(' ');
console.log(phone, username);

const [name, , title1] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];
console.log(name, title1);
const [name1, name2, ...rest] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic', 'mad mad'];
console.log(name1, name2, rest);

const options = {
  title: 'Menu',
  width: 100,
  height: 200,
};

const { title, width, height } = options;
console.log(title, height, width);
