// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
function steps(n, row = 0, str = "") {
  if (n === row) {
    return;
  }

  if (str.length === n) {
    console.log(str);
    return steps(n, row + 1);
  }

  str += str.length <= row ? "#" : " ";
  steps(n, row, str);
}
function steps1(n) {
  for (var row = 0; row < n; row++) {
    let str = "";
    for (var col = 0; col < n; col++) {
      str += col <= row ? "#" : " ";
    }
    console.log(str);
  }
}
function steps2(n) {
  for (var i = 1; i <= n; i++) {
    let str = "";
    for (var j = 0; j < i; j++) {
      str += "#";
    }
    for (var k = 0; k < n - i; k++) {
      str += " ";
    }
    console.log(str);
  }
}

module.exports = steps;
