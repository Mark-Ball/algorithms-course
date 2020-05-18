// function accepts an array
// returns a new array with all values flattened

function flatten(arr) {
    // take first element and add to a results array
    // if the first element is an array, add the inner elements
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...arr[i]);
        } else {
            result.push(arr[i]);
        }
    }
    if (result.every(x => !Array.isArray(x))) {
        return result;
    } else {
        return flatten(result);
    }
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[[1], [[2]]]])); // [1, 2]