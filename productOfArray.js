// function takes in an array of numbers
// return the product of all

function productOfArray(arr) {
    if (!arr.length) {
        return 1;
    }
    const last = arr.pop();
    return last * productOfArray(arr);
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60 