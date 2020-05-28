// function takes in a number and a position
// returns the index of place within num counting from the right
// eg getDigit(12345, 1) returns 4
function getDigit(num, place) {
    num = num.toString();

    if (place >= num.length) {
        return 0;
    }
    return +num[num.length - place - 1];
}

// return the number of digits in num
function digitCount(num) {
    return Math.abs(num).toString().length;
}

function mostDigits(arr) {
    let max = 0;
    for (let num of arr) {
        if (digitCount(num) > max) {
            max = digitCount(num);
        }
    }
    return max;
}

function radixsort(nums) {
    const numLoops = mostDigits(nums);
    for (let i = 0; i < numLoops; i++) {
        const buckets = Array.from(Array(10), () => []);
        for (let num of nums) {
            buckets[getDigit(num, i)].push(num);
        }
        nums = [].concat(...buckets);
        console.log(nums);
    }
    return nums;
}

console.log(radixsort([14, 2, 7, 22, 123]));
