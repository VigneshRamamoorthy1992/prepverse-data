/* 
how sum with memo
conditions: 
time: O(m2 * n)
space: O(m2) 
m - target sum 
n - length of an array
https://www.youtube.com/watch?v=oBt53YbR9Kk&t=9994s
*/

/* statement */
/*
Given a target sum <pre>8</pre> and a numbers array <pre>[2, 3, 5]</pre>
return numbers array by which a possible way the target sum can be achieved using the numbers array
note: no restriction on number of usage on numbers array
 */
/* solution */

function howSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResut = howSum(remainder, numbers, memo);
    if (remainderResut !== null) {
      memo[targetSum] = [...remainderResut, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return memo[targetSum];
}

console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
