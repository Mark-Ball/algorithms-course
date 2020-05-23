function merge(arr1, arr2) {
    // create result empty array
    // look at firsts element of each array, push lowest into result
    const result = [];
    let i1 = 0, i2 = 0;
    while (i1 < arr1.length || i2 < arr2.length) {
        if (!arr1[i1]) {
            result.push(arr2[i2]);
            i2++;
            continue;
        } else if (!arr2[i2]) {
            result.push(arr1[i1]);
            i1++;
            continue;
        }
        
        if (arr1[i1] < arr2[i2]) {
            result.push(arr1[i1]);
            i1++;
        } else {
            result.push(arr2[i2]);
            i2++;
        }
    }
    return result;
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const midpoint = Math.ceil((arr.length / 2));
    return merge(mergeSort(arr.slice(0, midpoint)), mergeSort(arr.slice(midpoint)));
}

console.log(mergeSort([1, 4, 2, 3, 5]));