// return a count of the number of matches of the little string inside the big string

function stringSearch(bigString, littleString) {
    let counter = 0;
    let matchBegin = 0;
    for (let i = 0; i < bigString.length; i++) {
        for (let j = 0; j < littleString.length; j++) {
            console.log(bigString[i], littleString[j]);
            if (bigString[i] === littleString[j]) {
                if (j === 0) {
                    matchBegin = i; // need to remember where the match began so we can walk back
                }
                if (j === littleString.length - 1) {
                    counter++;
                    break;
                }
                i++;
            } else {
                if (j > 0) {
                    i = matchBegin;
                }
                break;
            }
            
        }
    }
    return counter;
}

console.log(stringSearch('oomg', 'omg')); // 3