function greet(){
    console.log(`Hello duke lester `);

};
function myFullName(){
    console.log('Duke Lester'.toLowerCase());
};

function greetMultipleTimes(greetFunction){
    greetFunction();
    greetFunction();
};

console.log(greetMultipleTimes(greet));
console.log(greetMultipleTimes(myFullName));

function multiplication(num1, num2){
    console.log(num1, num2);
    const ans = num1 * num2;
    console.log(ans)
    return function multiply(num1, num2){
        return num1 * num2
    }
};

function multiplication2(num1, num2){
    console.log(num1, num2);
    const ans = num1 * num2;
    console.log(ans)
    return function multiply(){
        return ans
    }
};

console.log(multiplication(78, 90)(24, 9));

setTimeout(greet, 3000);
greet()

const intervalId = setInterval(greet, 5000);
clearInterval(intervalId);