// function takes 2 positive integers as args
// return true if the two numbers have the same frequency of digits
// else return false

function sameFrequency(a, b) {
    a = a.toString().split('');
    b = b.toString().split('');

    if (a.length !== b.length) {
        return false;
    }


    const countersA = {}
    for (let digit of a) {
        countersA[digit] = ++countersA[digit] || 1;
    }

    const countersB = {}
    for (let digit of b) {
        countersB[digit] = ++countersB[digit] || 1;
    }

    for (let key in countersA) {
        if (countersA[key] !== countersB[key]) {
            return false;
        }
    }
    return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false