// function accepts an array and callback
// return true if a single value in the array returns true when passed to callback
// else return false

function someRecursive(arr, callback) {
    if (!arr.length) {
        return false;
    }
    if (callback(arr.pop()) === true) {
        return true;
    }
    return someRecursive(arr, callback);
}