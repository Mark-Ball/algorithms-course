function addUpto(n) {
    // loop up to n and add that number to an accumulator
    let total = 0;
    for (let i  = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
console.log(addUpto(5));