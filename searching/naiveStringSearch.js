// return a count of the number of matches of the little string inside the big string

function stringSearch(bigString, littleString) {
    let counter = 0;
    for (let i = 0; i < bigString.length; i++) {
        for (let j = 0; j < littleString.length; j++) {
            if (j === littleString.length - 1) {
                counter++;
                break;
            }
            if (bigString[i] !== littleString[j]) {
                break;
            }
            i++;
        }
    }
    return counter;
}

console.log(stringSearch('zomgomgomg', 'omg')); // 3