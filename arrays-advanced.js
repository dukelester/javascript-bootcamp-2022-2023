function findUser(users, username) {
    return users.find((user) => user.username === username);
}

console.log(findUser([
    {username: 'duke', 'username': 'lester'}
], 'lester'));

function removeUser(users, username) {
    const userIndex = users.findIndex((user) => {
        return user.username === username;
    })
    if (userIndex !== -1) {
        return users.splice(userIndex, 1)[0]
    }
    return;
}

console.log(removeUser([
    {username: 'duke', 'username': 'great', 'username':'duke'}
], 'duke'));

const nums = [20, 10, 30, 80 , 39];
function doubleNums(nums) {
    return nums.map((num) => num * 2)
}

console.log(doubleNums(nums));

function evenNumbers(nums) {
    return nums.filter((num) => num % 2 === 0)
}
console.log(evenNumbers(nums));

function showFirstAndLast(words) {
    return words.map((word) => word[0] + word.at(word.length -1));
}

const myWords = ['lester', 'john', 'Mary', 'macknon'];
console.log(showFirstAndLast(myWords));

function addKeyAndValue(array, key, value) {
    array.forEach((object) => {
        console.log(object);
        object[key] = value
    })
    return array;
}
const addKeyAndValue2 = function(array, key, value) {
        array.map((object) => {
            object[key] = value;
        });
        return array
    }
const myArray = [
    { age: 45 }, {location: 'Monaco'}
]
console.log(addKeyAndValue(myArray, 'name', 'ken'));
console.log(addKeyAndValue2(myArray, 'occupation', 'Software Engineer'));

const fullName = 'duke lester';
const letterCount = {};
fullName.split('').forEach((letter) => {
    if(letterCount[letter]) {
        letterCount[letter] += 1
    } else {
        letterCount[letter] = 1
    }
});
console.log(letterCount)

function filterByValue(array, key) {
   return array.filter((obj) => obj[key] !== undefined)
}

console.log(filterByValue([{first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner'))