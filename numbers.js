// 7billion == 7e9 ==> use the e and a number of zeros
console.log(7e9, 7.3e9, 4e-6, 3e-2);
console.log(0xff, 0xf, 0b1101010110000001110010101010101010101, 0o234);
console.log('255'.toString(16));
const num = 255;
console.log(num.toString(16), num.toString(3));
console.log(980..toString(36), (34).toString(2));
console.log(typeof 34.98765678.toFixed(3), +35.98765456.toFixed(5));
console.log(90e307);

const nums = [23, 7];
nums[900] = 6789;
nums[2] = 80;
console.log(nums.length, nums);
["Bilbo", "Gandalf", "Nazgul"].forEach((name, index, array) =>{
    console.log(` ${name} in index ${index} of the ${array} .`)
});

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    ];

const foundUser = users.find((user) => {
    // if(user.id === 2 ){
    //     return `found at ${index}`
    // }
    return user.id === 1
});
console.log(foundUser, foundUser.name);
const foundUsers = users.filter(user => {
    return user.id <= 2 || user.name.toLowerCase() === 'pete';
});
console.log(foundUsers);

const newUsers = users.map((user) => {
    return user.name.toUpperCase();
});

console.log(newUsers);

const userObjects = users.map((user) => {
    return {
        username: user.name,
        userId: user.id,
    };
});
console.log(userObjects);

const numbers = [ 23, 4, 8, 33, 90, 34, 2, 1, 45 ];

const sortedNums = numbers.sort((a, b) => {
    console.log(` ${a} <> ${b}`)
    if(a > b) return 1;
    if( a == b) return 0;
    if(a < b) return -1;

});

console.log(sortedNums)