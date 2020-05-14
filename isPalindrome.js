// function returns true if string argument is a palindrome
// else returns false

function isPalindrome(str) {
    // check first and last letteer
    // if they are different, not a palindrome
    // if they are same, remove from string and check smaller string
    if (str.length < 2) {
        return true;
    }

    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true