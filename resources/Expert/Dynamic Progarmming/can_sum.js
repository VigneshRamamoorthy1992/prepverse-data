/* 
can sum with memo
conditions: 
time: O(m * n)
space: O(m) 
m - target sum 
n - length of an array
https://www.youtube.com/watch?v=oBt53YbR9Kk&t=9994s
*/

/* statement */
/*
Given a target sum <pre>8</pre> and a numbers array <pre>[2, 3, 5]</pre>
return true if there is a possible way the target sum can be achieved using the numbers array
note: no restriction on number of usage on numbers array
 */

/* solution */

function canSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;

    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return memo[targetSum];
}

console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
