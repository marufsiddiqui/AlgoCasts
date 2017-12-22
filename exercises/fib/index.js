// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    cache[args] = fn.apply(this, args);

    return cache[args];
  };
}

const fib = memoize(slowFib);
function fib1(n) {
  let nums = [0, 1];

  for (var i = 2; i <= n; i++) {
    nums.push(nums[i - 1] + nums[i - 2]);
  }

  return nums[n];
}
function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

module.exports = fib;
