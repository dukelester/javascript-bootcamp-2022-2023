// The Date() object

const now = new Date();
console.log(now);
const newDate = new Date(0);
console.log(newDate);
const date = new Date('2020-12-08');
console.log(date);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const time = date.getTime();
const timeOffSet = date.getTimezoneOffset();
console.log(year, month, day, hours, minutes, seconds, time, timeOffSet);

const newDate2 = new Date();
newDate2.setMinutes(newDate2.getMinutes() + 10);
console.log(newDate2);
const date3 = new Date();
console.log(+date3);
console.log(Date.now());

const parsedDate = Date.parse('2002-02-11T10:10:10');
const anotherDate = new Date(parsedDate);
console.log(parsedDate, anotherDate);
