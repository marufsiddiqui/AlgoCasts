// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  if (str < 2) {
    return true;
  }
  return str[0] === str[str.length - 1]
    ? palindrome(str.slice(1, str.length - 1))
    : false;
}
function palindrome3(str) {
  return str.split("").every((char, idx) => {
    return char === str[str.length - idx - 1];
  });
}
function palindrome2(str) {
  let res = false;
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] === str[j]) {
      res = true;
    } else {
      return false;
    }
  }
  return res;
}

function palindrome1(str) {
  return (
    str
      .split("")
      .reverse()
      .join("") === str
  );
}

module.exports = palindrome;
