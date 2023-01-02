// The Javacsript functions ==> Chunk of code which can do specific task
function isValidPassword(password, username){
    if (password.length < 8 || password.indexOf(username) || password.indexOf(' ') !== -1 ){
        console.log("invalid password");
        return false
    }
    return true
};

console.log(isValidPassword('dukelester', 'dukelester'));
console.log(isValidPassword('du34567892', 'dukelester'));
console.log(isValidPassword('567', 'dukelester'));
console.log(isValidPassword('ertyu rtyui22', 'dukelester'));


function calculateAverage (numbers){
    let totalSum = 0;
    for(let num of numbers){
        totalSum += num;
    };
    const average = totalSum / numbers.length;
    return `The total sum of ${numbers} is ${totalSum} and the average is ${average}`
};

console.log(calculateAverage([ 78, 22, 34, 12, 90, 33,34, 45 ]));
console.log(calculateAverage([ 0, 50 ]));

function checkForPengram(sentence){
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    for (let letter of alphabets){
        if(!sentence.toLowerCase().includes(letter)){
            return `${sentence} is not a pengram`
        }
    }
    return true
}

console.log(checkForPengram('the quick brown fox jumps over the lazy Dog'));
console.log(checkForPengram('the quick'));
console.log(checkForPengram('the quick brown fox Jam over the lazy Dog'));
console.log(checkForPengram('Sphinx of black quartz judge my vow'));

function pickRandomNumber(array){
    return array[Math.floor(Math.random() * array.length)]
};

function getCard(){
    const values = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'A' ];
    const suits = [ 'clubs', 'spades', 'hearts' ];
    // const valuePosition = Math.floor(Math.random() * values.length);
    const valuePosition = pickRandomNumber(values);
    // const suitPosition = Math.floor(Math.random() * suits.length);
    const suitPosition = pickRandomNumber(suits);
    return {
        value: values[valuePosition],
        suits: suits[suitPosition]
    }
}

for (let num = 0; num <= 50; num++){
    console.log(getCard());
}

function getCard2(){
    const values = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'A' ];
    const suits = [ 'clubs', 'spades', 'hearts' ];
    return{
        values: pickRandomNumber(values),
        suits: pickRandomNumber(suits)
    };
};

for (let num = 0; num <= 50; num++){
    console.log(getCard2());
};

function calculateDifference(num1, num2){
    return num1 - num2
};
console.log(calculateDifference(23, 8));

function calculateProduct(num1, num2){
    return num1 * num2
};
console.log(calculateProduct(23, 8));


function generateRandomDay(array){
    return array[Math.floor(Math.random() * array.length)]
};

function getTheDay(){
    const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
    return {
        day: generateRandomDay(days)
    };
};

console.log(getTheDay())
console.log(getTheDay());

function getLastElement(array){
    if(!array){
        return undefined
    }
    return array.at(-1)
};


console.log(getLastElement([]),getLastElement([ 23, 8, 0, 89, 'helo' ]));

function compareTwoNumbers(number1, number2){
    if(number1 > number2){
        return 'First is greater'
    }
    if(number1 < number2){
        return 'Second is greater'
    }
    else{
    return 'Numbers are equal'
    }

}

console.log(compareTwoNumbers(23, 10),compareTwoNumbers(23, 90), compareTwoNumbers(23, 23));

function countLetterInWord(word, letter){
    let times = 0;
    for(let i = 0; i < word.length; i++){
        console.log(i)
        if(word.toLowerCase().charAt(i) === letter.toLowerCase()){
            times += 1
        }
    }
    return times

}

console.log(countLetterInWord("duke dlester", 'd'), 'duke dlester'.length);
console.log(countLetterInWord("English is an awesome language to learn", 'E'))

console.log()
function countEachLetter(word){
    for (let letter of word){
        console.log(letter, word.indexOf(letter))
    }
}

console.log(countEachLetter("lester"));

function multipleLetterCount(str){
    str = str.toLowerCase();
    let finalObject = {};
    for(let i = 0; i < str.length; i++){
        if(finalObject[str[i]] === undefined){
            finalObject[str[i]] = 1;
        }else{
            finalObject[str[i]]++;
        }
    }
    return finalObject;
};
console.log(multipleLetterCount('duke lester dlester and lester'));

function checkForPalindrome(string){
    return string.toLowerCase().split('').reverse().join('').trim() === string.toLowerCase();
}

console.log(checkForPalindrome("duke lester dlester"), checkForPalindrome('hannah') );

function arrayManipulation(array, command, location, value){
    if(command === 'remove' && location === 'end'){
        return array.pop();
    };
    if (command === 'remove' && location === 'beginning'){
        return array.shift();
    };
    if(command === 'add' && location === 'beginning'){
        array.unshift(value);
        return array;
    };
    if (command === 'add' &&  location === 'end'){
        array.push(value);
        return array
    }
};

console.log(arrayManipulation([90, 80, 60, 56], "remove", "end"));
console.log(arrayManipulation([90, 80, 60, 56], "remove", "beginning"));
console.log(arrayManipulation([90, 80, 60, 56], "add", "end", 97));
console.log(arrayManipulation([90, 80, 60, 56], "add", "beginning", 79));