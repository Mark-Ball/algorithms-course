// function accepts an array and value
// return index of the value in the array
// return -1 if the value is not present

function linearSearch(arr, val) {
    for (let i in arr) {
        if (arr[i] === val) {
            return +i;
        }
    }
    return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1