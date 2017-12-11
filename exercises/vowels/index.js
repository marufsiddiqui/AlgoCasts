// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
function vowels2(str) {
  const allVowels = "aeiou";
  let counter = 0;

  for (const char of str.toLowerCase()) {
    if (allVowels.includes(char)) {
      counter++;
    }
  }

  return counter;
}
function vowels1(str) {
  const allVowels = ["a", "e", "i", "o", "u"];
  return str
    .toLowerCase()
    .split("")
    .reduce((a, i) => (allVowels.includes(i) ? a + 1 : a), 0);
}

module.exports = vowels;
