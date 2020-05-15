// function accepts a sorted array
// counts the unique values in the array

function countUniqueValues(arr) {
    // multiple pointers approach
    // pointer at first position
    // pointer at second position
    // initialize counter at 1 as long as there is something in arr
    if (!arr.length) {
        return 0;
    }
    let counter = 1;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            counter++;
        }
    }
    return counter;
}

function countUniqueValues2(arr) {
    // frequency counter approach
    const counts = {};
    for (let num of arr) {
        counts[num] = ++counts[num] || 1;
    }
    return Object.keys(counts).length;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
console.log(countUniqueValues2([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues2([])); // 0
console.log(countUniqueValues2([-2, -1, -1, 0, 1])); // 4