// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  let nums = [];

  for (var i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
      nums.push(i);
    } else {
      nums.push(nums[i - 1] + nums[i - 2]);
    }
  }

  return nums[n];
}
function fib2(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

module.exports = fib;
