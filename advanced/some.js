// Iterates thro an array and returns True or false by pasing in a callback
const numbers = [90, 66, 89, 100, 34, '109'];

const greater = numbers.some((value) => {
    return value > 80;
});

const lessThan = numbers.some((number) => {
    return number < 20;
});
console.log(greater, lessThan);

const everyNumber = numbers.every((num) => {
    return typeof num === 'number';
});
console.log(everyNumber);

// Implementing some
const mySome = (array, callback) => {
    for(let k of array) {
        if (callback(k)) return true;
    }
    return false;
}
console.log(mySome(numbers, (num) => {
    return num < 70;
}));

const myEvery = (array, callback) => {
    for(let k of array) {
        if(!callback(k)) return false;
    }
    return true;
}

console.log(myEvery(numbers, (num) => {
    return num > 10
}));

console.log(myEvery(numbers, (num) => {
    return typeof num === 'string';
}));