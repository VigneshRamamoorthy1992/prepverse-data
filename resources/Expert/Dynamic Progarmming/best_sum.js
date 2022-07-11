/* 
best sum with memo
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
return best possible way the target sum can be achieved using the numbers array
note: no restriction on number of usage on numbers array
 */

/* solution */

function bestSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResut = bestSum(remainder, numbers, memo);
    if (remainderResut !== null) {
      const combination = [...remainderResut, num];
      console.log(combination);

      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return memo[targetSum];
}

console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(300, [7, 14]));
