/* 
count construct with memo
conditions: 
time: O(m2 * n)
space: O(m2) 
m - target.length 
n - lenth of word bank
https://www.youtube.com/watch?v=oBt53YbR9Kk&t=9994s
*/
/* solution */

function countConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let totalCount = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      totalCount += countConstruct(suffix, wordBank, memo);
    }
  }

  memo[target] = totalCount;
  return totalCount;
}

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeeee",
    "eeeeee",
  ])
);
