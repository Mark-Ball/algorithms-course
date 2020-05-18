function insertionSort(arr) {
    // first element is the sorted part
    let sorted = [arr[0]];
    for (let i = 1; i < arr.length; i++) { // loop through arr
        for (let j = 0; j < sorted.length; j++) { // loop through sorted
            console.log(i, j, sorted);
            if (arr[i] < sorted[j]) {
                sorted.splice(j, 0, arr[i]);
                break;
            } else if (j === sorted.length - 1) {
                sorted.push(arr[i]);
                break;
            }
        }
    }
    return sorted;
}

console.log(insertionSort([3, 1, 5, 4, 2]));