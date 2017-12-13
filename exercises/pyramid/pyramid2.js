function t1(n) {
  for (var row = 0; row < n; row++) {
    var str = "";

    for (var col = 0; col < row + 1; col++) {
      str += "*";
    }

    console.log(str);
  }
}

function t2(n) {
  for (var row = 0; row < n; row++) {
    var str = "";

    for (var col = 0; col < n; col++) {
      str += row > col ? " " : "*";
    }

    console.log(str);
  }
}
function t3(n) {
  for (var row = 0; row < n; row++) {
    var str = "";

    for (var col = 0; col < n - row; col++) {
      str += "*";
    }

    console.log(str);
  }
}
function t4(n) {
  for (var row = 0; row < n; row++) {
    var str = "";

    for (var col = 0; col < n; col++) {
      str += col < n - row - 1 ? " " : "*";
    }

    console.log(str);
  }
}
t1(5);
console.log("\n");
t2(5);
console.log("\n");
t3(5);
console.log("\n");
t4(5);
