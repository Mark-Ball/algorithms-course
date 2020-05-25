// recursive function
// given an array of strings, capitalize the first letter of each string

function capitalizeFirst(arr) {
    // base case
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i][0].toUpperCase() + arr[i].slice(1));
    }
    console.log(result);
    return result;
    // recursive call
    // capitalizeFirst()

}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car', 'Taco', 'Banana']