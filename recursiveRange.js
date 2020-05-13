// function accepts a number
// adds all numbers from 0 to the number

function recursiveRange(n) {
    if (n < 0) {
        return 0;
    }
    return n + recursiveRange(n - 1);
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
