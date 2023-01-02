// The loops in Js

function calculate_heart_beat_since_birth(birthYear, birthMonth, birthDay){
    const AVERAGE_HEART_RATE_PER_MILLSECOND = 70 / 60000;
    const monthIndex = birthMonth - 1;
    const birthDate = new Date(birthYear, monthIndex, birthDay);
    const currentDate = new Date();
    const dateDifference = currentDate - birthDate;
    return dateDifference / AVERAGE_HEART_RATE_PER_MILLSECOND;
};

console.log(calculate_heart_beat_since_birth(2002, 10, 12));
console.log(calculate_heart_beat_since_birth(1997, 12, 02));
console.log(calculate_heart_beat_since_birth(2022, 12, 1));

const animals = [ 'lions', 'giraffe', 'donkey', 'monkey', 'bears' ];
for (let animal = 0; animal < animals.length; animal++){
    console.log(animal, animals[animal]);
};

const data = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
];

const userEmails = [];
const userNames = [];
const userAvatars = [];
const extractUserInformation = function(userData){
    for(let user = 0; user < userData.length; user++){
        userEmails.push(userData[user].email);
        userNames.push(userData[user].first_name + ' ' + userData[user].last_name);
        userAvatars.push(userData[user].avatar)
    };
    return {
        userEmails: userEmails,
        userNames: userNames,
        userAvatars: userAvatars,
    };
};

console.log(extractUserInformation(data));

const fullName = ' I am a programmer ';
for(let i = 0; i < fullName.length; i++){
    console.log(fullName[i]);
};

const number = 30;
for (let num = number; num >=0; num--){
    console.log(num);
};

let reversedFullName = '';
for (let word = fullName.length - 1; word >= 0; word--){
    reversedFullName += fullName[word];
};
console.log(reversedFullName);

let reversedUserNames = [];
for(let userName = userNames.length - 1; userName >= 0; userName--){
    const userName_ = userNames[userName];
    console.log(userName_);
};

console.log(calculate_heart_beat_since_birth(1995, 10, 3));

const gameBoard = [
    [ 4, 32, 8, 4 ],
    [ 64, 8, 32, 2 ],
    [ 8, 32, 16, 4 ],
    [ 2, 8, 4, 2 ],
];

let totalScore = 0;
for (row = 0; row < gameBoard.length; row++){
    console.log(gameBoard[row]);
    const myRow = gameBoard[row];
    for (let position = 0; position < myRow.length; position++ ){
        console.log(myRow[position]);
        totalScore += myRow[position];
    };
};

console.log(totalScore);

let target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
console.log(target, guess);
while (guess !== target){
    console.log(`The guess is ${guess} and the Target is ${target}`);
    guess = Math.floor(Math.random() * 10);
};

console.log(`The guess is ${guess} and the Target is ${target}`);
console.log("****** CONGRATS, YOU HAVE WON!!!");

for(let userData of data){
    console.log(userData);
    console.log(userData.email)
};

for( let letter of "Duke lester is a great programmer"){
    console.log(letter.toUpperCase());
};

const data2 = {
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://reqres.in/img/faces/7-image.jpg"
};

for (let property of Object.keys(data2)){
    console.log(property)
};

for (let num = 0; num <= 10; num++){
    console.log(num);
};

console.log("\n")
let num = 0;
while(num <= 10){
    console.log(num);
    num++
};
console.log("\n")
for(let num = 0; num <= 20; num++){
    if (num % 2 === 0){
        console.log(num);
    };
};

// console.log("\n");
// let num2 = 0;
// while (num2 <= 20){
//     if(num2 % 2 !== 0 ){
//         console.log(num2, 'odddd');
//     };
//     num++
// };
// console.log("here")
console.log('hh')
for ( let num = 10; num >= 0; num--){
    console.log(num)
}