// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt1(n) {
  return (
    Math.sign(n) *
    parseInt(
      n
        .toString()
        .split("")
        .reverse()
        .join(""),
      10
    )
  );
}

function reverseInt(n) {
  const reversed = parseInt(
    n
      .toString()
      .split("")
      .reverse()
      .join(""),
    10
  );

  return n < 0 ? reversed * -1 : n;
}

module.exports = reverseInt;
