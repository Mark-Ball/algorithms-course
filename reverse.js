// function accepts a string, returns a new string in reverse

function reverse(str, revStr = '') {
    if (str.length === 0) {
        return revStr;
    }
    revStr = str[0] + revStr;
    return reverse(str.substr(1), revStr);
}

function reverse(str) {
    if (str.length <= 1) {
        return str;
    }
    return reverse(str.slice(1)) + str[0];
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'