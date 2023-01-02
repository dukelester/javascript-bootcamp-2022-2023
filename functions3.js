// functions for prime numbers

function isPrimeNumber(number){
    nextPrime: for (let n = 2; n < number; n++){
        for (let m = 2; m < n; m++){
            if (n % m === 0) continue nextPrime;
        };
    console.log(n, "is prime")
    };

};
isPrimeNumber(9);
// Better solution

function calcultePrime(number){
    for (let n = 2; n < number; n++){
        if (number % n === 0){
            return false
        }
    };
    return true
};
console.log(calcultePrime(2), calcultePrime(5), calcultePrime(7));

function primeNumbers (number){
    for (let i = 2; i < number; i++){
        if(!calcultePrime(i)){
            continue
        };
        console.log(i,' is prime');
    }
};
primeNumbers(89);


function checkAge(age){
    if (age > 18){
        return 'okey you can go on';
    }
    else{
        return 'Your parents will know';
    };
};

function checkAge2(age){
    if (age > 18){
        return 'okey you can go on';
    }
    return 'Your parents will know';
};

function checkAge3(age){
    return age > 18 ? 'everything is okay ' : ' you are not allowed here please';
};

console.log(checkAge(5), checkAge(15), checkAge(20));
console.log(checkAge2(5), checkAge2(18), checkAge2(30));
console.log(checkAge3(56), checkAge3(5));

function minmum(num1, num2){
    if (num1 > num2){
        return num1;
    }
    return num1
};

console.log(minmum(2, 7), minmum(3, 3));
function power(num, n){
    return num ** n;
};

console.log(power(2, 2), power(45, 9));

