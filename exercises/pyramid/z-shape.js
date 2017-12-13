function s(n) {
  for (var row = 0; row < n; row++) {
    let str = "";
    for (var col = 0; col < n; col++) {
      str += row === 0 || row === n - 1 || col === n - row - 1 ? "*" : " ";
    }
    console.log(str);
  }
}

s(6);
