// Iterates thro the array
// runs the call back if the call back return true it gets the element otherwise return undefined
const marks = [34, 45, 56, 90, 78, 34, 80];

const myScore = marks.find((mark) => {
    return mark > 50;
});

const evenMark = marks.find((mark) => {
    return mark  % 2 === 0 && mark > 70;
});

console.log(myScore, evenMark);

const name = 'lollapalooza';
const charFreq = {};
for (let letter of name) {
    if(charFreq[letter]) {
        charFreq[letter] += 1;
    }
    else {
        charFreq[letter] = 1;
    }
}

console.log(charFreq);
const totalMark = marks.reduce((total, mark) => {
    return total + mark;
}, 0)
console.log(totalMark);

const sum = marks.reduce((sum, m) =>sum + m);
console.log(sum);
