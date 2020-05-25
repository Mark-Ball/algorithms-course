function quicksort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const i = pivot(arr, left, right);
        quicksort(arr, left, i - 1);
        quicksort(arr, i + 1, right)
    }
    return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
    let p = start, j = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (arr[i] < arr[p]) {
            j++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[j], arr[p]] = [arr[p], arr[j]];
    return j;
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

console.log(quicksort([1, 5, 3, 2, 4]));