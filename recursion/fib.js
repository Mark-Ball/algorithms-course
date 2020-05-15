// fibonacci function which accepts a positive integer arg n
// returns the nth number in the fibonacci sequence

function fib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

// console.log(fib(3)); // 2
// console.log(fib(4)); // 3
// console.log(fib(10)); // 55
// console.log(fib(28)); // 317811
// console.log(fib(35)); // 9227465

// now to memoise the fib function
// the function calls fib with the same args many times
// we can be more efficient by saving the results of those calls in an object and 
// accessing that instead of re-running all the function logic

function memoise(fn) {
    const cache = {};

    return function(args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn(args);
        cache[args] = result;
        return result;
    }
}

fib = memoise(fib);

console.log(fib(4)); // 2
// console.log(fib(4)); // 3
// console.log(fib(10)); // 55
// console.log(fib(28)); // 317811
// console.log(fib(35)); // 9227465