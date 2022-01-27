/* 
fibnocci with recursion and memo
conditions: 
time: O(n)
space: O(n) 
*/
/* solution */

function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 1 || n === 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

const result = fib(67);
console.log(result);
