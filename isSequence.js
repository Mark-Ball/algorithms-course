// function takes 2 strings as arguments
// check whether the chars in the first string
// appear in the second string in the same order
// 2 pointer approach
// first pointer starts at beginning of first string
// second pointer starts at beginning of second string
// increment first pointer until it reaches a character which is the same as second pointer
// if first pointer gets to the end without finding that char in second string, return false
// when both are pointing to same char, increment both and check again

function isSequence(str1, str2) {
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer2 < str2.length) {
        if (str1[pointer1] === str2[pointer2]) {
            pointer1++;
            pointer2++;
        } else {
            pointer2++;
        }

        if (pointer1 === str1.length) {
            return true;
        }
    }
    return false;
}

console.log(isSequence('hello', 'hello world')); // true
console.log(isSequence('sing', 'sting')); // true
console.log(isSequence('abc', 'abracadabra')); // true
console.log(isSequence('abc', 'acb')); // false