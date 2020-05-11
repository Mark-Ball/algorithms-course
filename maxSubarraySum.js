// function which takes 2 args
// first arg is an array (arr)
// second arg is an integer (num)
// return the subarray of the length num with the highest sum

function maxSubarraySum(arr, num) {
    // sliding window approach
    // sum first num numbers
    // create sliding window by subtracting first, adding next number
    if (num > arr.length) {
        return null;
    }

    let sum = 0;
    let maxSum;
    for (let i = 0; i < num; i++) {
        sum += arr[i];
    }
    maxSum = sum;
    
    for (let i = 1; i < arr.length - num + 1; i++) {
        sum = sum - arr[i - 1] + arr[i + num - 1];
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)) // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)) // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)) // 5
console.log(maxSubarraySum([2, 3], 3)) // null