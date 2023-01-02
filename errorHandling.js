// The try... and catch ...

try {
  lalalaalala;
} catch (error) {
  console.log(error.name, error.message);
}
console.log('hello');

const myJson = '{"name" : "dukelester"}';
console.log(myJson);
try {
  const users = JSON.parse(myJson);
  console.log(users.name);
  if (!users.age) throw new SyntaxError('The age attribute is missing for a user');
} catch (error) {
  console.log(error.name);
}

const error = new Error('custom error');

console.log(error.name, error.message);
