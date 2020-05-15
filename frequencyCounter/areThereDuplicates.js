// function accepts any number of arguments
// arguments can be numbers or strings
// checks whether there are any duplicates

function areThereDuplicates() {
    const counters = {};
    for (let arg of arguments) {
        counters[arg] = ++counters[arg] || 1;
    }
    for (let key in counters) {
        if (counters[key] > 1) {
            return true;
        }
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3, 'h')); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true