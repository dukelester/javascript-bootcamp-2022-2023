// Debugging

let grades = [ 99, 98, 76, 54, 66, 90, 81 ];
let sum = 0;
for (let grade = 0; grade <= grades.length; grade++){
    debugger;
    sum += grades[grade];
};

let average = sum / grades.length;

console.log(average)