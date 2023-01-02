// The JSON =. JavaScript Object Notation
const student = {
  name: 'lester',
  age: 30,
  phone: '+254799443070',
  skills: ['programming', 'html', 'css', 'python'],
};

console.log(student);
const toJson = JSON.stringify(student);
console.log(toJson, typeof toJson);
const fromStrintToJson = JSON.parse(toJson);
console.log(fromStrintToJson);
