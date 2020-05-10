// function same accepts 2 arrays
// return true if every value in the first array has its corresponding value squared in the second array
// the frequency of values must be the same
// order can be mixed up

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    arr1 = arr1.map(x => x * x);

    const frequencyCounter1 = {};
    const frequencyCounter2 = {};
    const longestArray = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < longestArray; i++) {
        if (arr1[i]) {
            frequencyCounter1[arr1[i]] = ++frequencyCounter1[arr1[i]] || 1;
        }
        if (arr2[i]) {
            frequencyCounter2[arr2[i]] = ++frequencyCounter2[arr2[i]] || 1;
        }
    }
    
    for (let key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }
    return true;
}

console.log(same([1, 2, 3], [1, 4, 9])); // true
console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 4, 9, 9])); // false