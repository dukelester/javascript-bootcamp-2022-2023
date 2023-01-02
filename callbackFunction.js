// A function being sent as a function

function ask (question, yes, no){
    if (askQuestion()){
        return 'Yes its all well ...';
    }
    else {
        console.log('No the function failed...');
        return dontAskQuestion()
    };
};

function askQuestion (){
    return true;
};
function dontAskQuestion () {
    return false;
};

console.log(ask("Are you a programmer", askQuestion()));

function askQuestion2(question, yes, no){
    console.log(question)
}
askQuestion2 (
    'Do you know JS ?',
    function () { 'Yes i do' },
    function () { 'No i dont' }
);

console.log(area(56));

function area (radius){
    return Math.PI * radius * radius;
};

console.log(areaOfRectangle(67, 90));

function areaOfRectangle (width, length){
    return width * length;
};

let areaOfCircle = (radius) => { return  radius * radius * Math.PI };
console.log(areaOfCircle(50));

const myFunction = () => { // arrow function declaration
    // statements
};

const double = number => number * 2;
console.log(double(90));

const funtion2 = () =>{
    console.log('function of type arrow ...');
    return 'arrow function without a parameter..';
};

console.log(funtion2());

let age = 10;

const myAge = ( age < 18) ? () => { return 'age is less than 18' } : () => { return 'Age is greater than 18 '};
console.log(myAge());
console.log(powerOfNumber(25, 5));

function powerOfNumber(number, n) {
    if (number < 0) {
        return;
    };

    let result = 1;
    for ( let i = 0; i < n; i++){
        result *= number;
    };

    return result;
};

const myArea2 = areaOfAfigure(21);
console.log(myArea2);

function areaOfAfigure(radius) {
    return radius * radius * Math.PI;
};

/**
 * Raises a number to the power
 * @param{ number} num must be a positive number
 * @param{ number } must be a real positive number
 * @return{ number } a number raised to power n
 */

console.log(powerOfNum(9, 3));

function powerOfNum(number, n) {
    if(n < 0) {
        return;
    };
    let result = 1;
    for (k = 0; k < n; k++) {
        result *= number;
    };
    return result
};

