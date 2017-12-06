// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar1(str) {
  return str.split("").reduce(
    (a, i) => {
      a[i] = a[i] + 1 || 1;
      a.max = a[i] > a[a.max] ? i : a.max;
      return a;
    },
    { max: str[0] }
  ).max;
}

function maxChar(str) {
  const charMap = {};
  let maxChar = str[0];

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
    maxChar = charMap[char] > charMap[maxChar] ? char : maxChar;
  }

  return maxChar;
}

module.exports = maxChar;
