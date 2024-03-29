/* 
can construct with memo
conditions: 
time: O(m2 * n)
space: O(m2) 
m - target.length 
n - lenth of word bank
https://www.youtube.com/watch?v=oBt53YbR9Kk&t=9994s
*/

/* statement */
/*
Given a string <pre>abcdef</pre> and a word bank <pre>["ab", "abc", "cd", "def", "abcd"]</pre>
return true if there is a possible way to construct string using the word bank
note: no restriction on number of usage on word bank items
 */

/* solution */

function canConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return true;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeeee",
    "eeeeee",
  ])
);
