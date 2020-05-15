// recursive exercise
// function accepts a base and exponent
// return the power of the base to the exponent

function power(base, exponent, total = 1) {
    // base case
    if (exponent === 0) {
        return total;
    }

    return power(base, exponent - 1, total * base);
}

console.log(power(2, 0)) // 1
console.log(power(2, 2)) // 4
console.log(power(2, 4)) // 16