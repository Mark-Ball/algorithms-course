// implement binary search
// given an sorted array and number, return index of that number
// if number is not present, return -1

function binarySearch(arr, val) {
    let min = 0;
    let max = arr.length - 1;
    let midpoint = Math.ceil((min + max) / 2);
    const maxIterations = Math.log2(arr.length);

    for (let i = 0; i < maxIterations; i++) {
        if (arr[midpoint] === val) {
            return midpoint;
        } else if (val < arr[midpoint]) {
            max = midpoint - 1;
        } else {
            min = midpoint + 1;
        }
        midpoint = Math.ceil((min + max) / 2);
    }
    return -1;
}

console.log(binarySearch([1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19], 19)); // -1