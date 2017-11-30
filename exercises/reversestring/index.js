// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

function reverse1(str) {
    let arr = [];
    for (let i of str) {
        arr.unshift(i);
    }
    return arr.join('');
}

function reverse2(str) {
    let arr = []
    for (let i = 0; i < str.length; i++) {
        arr.unshift(str[i]);
    }
    return arr.join('');
}

module.exports = reverse;
