// recursive function
// accepts a number and returns the factorial of that number

function iterativeFactorial(n) {
    let result = 1;
    while (n > 0) {
        result *= n;
        n -= 1;
    }
    return result;
}

function factorial(n) {
    // base case
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
console.log(iterativeFactorial(7)); // 5040