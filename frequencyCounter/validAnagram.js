// write a function which takes 2 inputs and checks if they are anagrams
// assume that inputs will always be composed of lower case letters

function validAnagram(a, b) {
    // check if lengths are the same, return false if not
    if (a.length !== b.length) {
        return false;
    }
    // create charmap of A
    const charmapA = {};
    for (let char of a) {
        charmapA[char] = ++charmapA[char] || 1;
    }
    // create charmap of B
    const charmapB = {};
    for (let char of b) {
        charmapB[char] = ++charmapB[char] || 1;
    }
    // check equality of charmaps
    for (let key in charmapA) {
        if (charmapA[key] !== charmapB[key]) {
            return false;
        }
    }
    return true;
}

// function validAnagram(a, b) {
//     a = a.split('').sort().join();
//     b = b.split('').sort().join();

//     if (a !== b) {
//         return false;
//     }
//     return true;
// }

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // false
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true