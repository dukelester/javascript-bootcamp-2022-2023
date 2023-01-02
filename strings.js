// Learning about the JS Strings primitives

const myString = new String("Hello welcome to my string ");
console.log(myString)
const another = " Just another string right here ";
console.log(another)
console.log(another.charAt(2), another.charAt(4).toUpperCase())
const fullName = `dukelester dlester`;
console.log(fullName.includes('lester'), fullName[0], fullName[8]);

const str1 = "lester is Duke";
const str2 = "duke lester is Lester";
console.log(str1 === str2 , str1 > str2, str2 > str1, str1.includes(str2))

if (str1 > str2){
    console.log(`${str1.toUpperCase()} is greater than ${str2.toUpperCase()}`); // string interpolation
}else{
    console.log(`${str2} is greater than ${str1}`)
};
const str3 = "duke lester";
const str4 = 'Duke Lester';

console.log(str3 === str4, str3 > str4, str4 > str3, str3.toUpperCase() === str4.toUpperCase(),
    str1.length, str2.length
    );

const theyAreEqualUpperCase = function(string1, string2) {
    return string1.toUpperCase() === string2.toUpperCase()
};
const theyAreEqualLowerCase = function(string1, string2) {
    return string1.toLowerCase() === string2.toLowerCase()
};

console.log(theyAreEqualUpperCase(str3, str4), theyAreEqualUpperCase("ß", "ss"))
console.log(theyAreEqualLowerCase(str3, str4), theyAreEqualLowerCase("ß", "ss"),
    theyAreEqualLowerCase("ı", "I")
    );
console.log(typeof 'string1');
console.log(typeof String(233));
console.log(eval("2 + 2"));
console.log("23 + 33".valueOf(), eval("45 * 5".valueOf()));
console.log(toString(10))
console.log("duke lester and \v dlester");
const longString = "duke lester is an amazing JS developer " +
    "I am a developer who loves js" +
    "I have been studying all this js for a long time"
console.log(longString);
const anotherString = " This is the common string here \
another string continue here \
here is a long string in Js.";
console.log(anotherString)
const fullName2 = "duke lester de";
console.log(fullName2.lastIndexOf("k"));

console.log("mystring is nice".at(90))

const lastElement = function(string){
    return string.at(-1);
};

console.log(lastElement("duke lester dlester"));
const letterAtPosition = function(string, position){
    return string.at(position);
};

console.log(letterAtPosition("lester dlester", 3));
console.log("hello world".charAt(9));

console.log("duke".concat(" lester", " dlester", " computer programmer"));
const names = [ ' duke', ' lester', ' john', ' mark' ];
console.log("Hello, ".concat(...names));

const fullStatement = " I am a computer programmer here in Kenya Nairobi";
console.log(fullStatement.endsWith("bi"), fullStatement.endsWith("a", 4));
const phoneNumber = "079944370";
const validPhoneNumber = function(phone){
    if (phone.length === 10 && phone.at(0) === '0' && phone.at(1) === '7'){
        return {
            "message": "A valid phone number",
            "valid": true,
            phone: "+254".concat(phone.slice(1))
        }
    }
    else if (phone.length < 10){
        console.log("Phone is too short")
        return {
            "message": "phone too short",
            "valid": false
        }
    }
    else if (phone.length > 10 && phone.length === 12 && phone.includes("254",2)){
        console.log("number is ", phone);
        return "+".concat(phone)

    }
    else if (phone.length > 10 && phone.length === 13 && phone.includes("+254")){
        return {
            "message": "A valid phone number",
            "valid": true,
            phone: phone
        }
    }
    else{
        console.log("please enter a valid phone number ...")
        return "Invalid phone"
    }
}

console.log(validPhoneNumber(phoneNumber))
console.log(validPhoneNumber("0799456789"))
console.log(validPhoneNumber("254799456789"))

console.log(validPhoneNumber("+254799456789"), "here")

console.log(String.fromCharCode(200, 89,12,190,199, 191,120,60));
console.log('GARBAGE'.slice(2).replace('B', ''));

let str5 = "To be, or not to be, that is the question.";
let count = 0;
let position = str5.indexOf('e');

while(position !== -1) {
    count++
    position = str5.indexOf('e', position + 1)
}
console.log(count, "times")

// The match()
const myOtherString = "The Quick fox eat my chickens all of them!";
console.log(myOtherString.match(/[A-Z]/g));
console.log(myOtherString.match(/[quick]/i));
const myRawString = String.raw`C:\Development\profile\aboutme.html`;
const rawStrings = String.raw`C:\Development\profile\aboutme.html`;
console.log(myRawString, myOtherString.repeat(8));
console.log("duke lester".repeat(0), "duke".repeat(3), "duke".repeat(null))
console.log("duke lester".replace("duke", "leter"), "lester duke lester".replace("lester", ""));
const emailAddress = "test@gmail.com";
console.log(emailAddress.replace("@gmail", "@yahoo"));
console.log("duke lester is a good programmer".replace(/duke/g, "Dlester").replace(/lester/g, "duke"));
console.log("Duke lester dlester".search(/d/gi));
console.log("test".slice(1, -2));
const myOtherPhone = "+254799443070";
const editedPhone = '0' + myOtherPhone.slice(4);
const edittedOther = myOtherPhone.replace("+254", "0");
console.log(editedPhone, "other => ", edittedOther);
const normalPhone = "0799443079";
const newPhoneNumber = normalPhone.replace(/0/, "+254");
console.log("my fully editted number :", newPhoneNumber);
console.log(editedPhone.split(''), "I am duke lester dlester".split(''));
const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
console.log(monthString.split(','));

const stringSplitter = function(string, separator, limit){
    console.log(`The string is :: ${string} and the separator is :=> '${separator}'`);
    return string.split(separator, limit);
};
console.log(stringSplitter("Oh brave new world that has such people in it", " "));
console.log(stringSplitter(monthString, ","));
console.log(stringSplitter("Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ", ";", 3));

console.log(phoneNumber.startsWith("07"));

const cleanPhoneNumber = function(number){
    if(number.length < 10 | number.length > 13){
        return "invalid phone number";
    }
    if(number.startsWith("07") && number.length === 10){
        return `+254${number.slice(1)}`;
    }
    else if(number.length === 12 && number.startsWith("2547")){
        return `+${number}`;
    }
    else if(number.length === 13 && number.startsWith("+254")){
        return number;
    }
    else{
        return "Please enter a valid phone number";
    }
};
console.log(cleanPhoneNumber(normalPhone));
console.log(cleanPhoneNumber("073456722"), cleanPhoneNumber("+254799443070"),
    cleanPhoneNumber("+254799")
    );
console.log(cleanPhoneNumber("254799443070"));
let age = 89;
let age2 = age.toString();
console.log(age.toString(), typeof age, typeof age2);

console.log(validPhoneNumber.valueOf(), age.valueOf(), "duke lester value of".valueOf());
console.log(phoneNumber.length, validPhoneNumber.length, cleanPhoneNumber.length, theyAreEqualLowerCase.length);
console.log(validPhoneNumber.name, theyAreEqualUpperCase.name)
