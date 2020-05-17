function bubblesort(arr) {
    let swaps;
    for (let i = 0; i < arr.length; i++) {
        swaps = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swaps = true;
            }
        }
        if (!swaps) {
            return arr;
        }
    }
    return arr;
}

console.log(bubblesort([2, 1, 4, 3]));
console.log(bubblesort([4, 1, 2, 3]));