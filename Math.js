// The math module for doing mathematical calculations
console.log(Math.E, Math.PI);
const randomAge = Math.floor(Math.random() * 6);
console.log(randomAge);
console.log(Math.imul(23, 10))

const degreeToRadians = function (degree){
    return degree * (Math.PI / 180)
};
console.log(degreeToRadians(90), degreeToRadians(80), degreeToRadians(30));

const radiansToDegrees = function(radian){
    return radian / (Math.PI / 180)
};
console.log(radiansToDegrees(degreeToRadians(90)), radiansToDegrees(degreeToRadians(10)));

function generateRandom(minimum, maximum){
    const num = Math.floor(Math.random() * maximum - minimum + 1) + minimum;
    return num
};
console.log(generateRandom(10, 20));
let age = 7;
age === 20 ? console.log("old enough") : console.log("Not old enough");
console.log(age)
