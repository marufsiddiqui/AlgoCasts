// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(str1, str2) {
  const str1CharMap = charMap(str1);
  const str2CharMap = charMap(str2);

  if (Object.keys(str1CharMap).length !== Object.keys(str2CharMap).length) {
    return false;
  }

  for (let char in str1CharMap) {
    if (str1CharMap[char] !== str2CharMap[char]) {
      return false;
    }
  }
  return true;
}

function charMap(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .reduce((a, i) => {
      a[i] = a[i] + 1 || 1;
      return a;
    }, {});
}

function anagrams1(stringA, stringB) {
  return toSortedString(stringA) === toSortedString(stringB);
}

function toSortedString(str) {
  return str
    .split("")
    .sort()
    .join("");
}

module.exports = anagrams;
