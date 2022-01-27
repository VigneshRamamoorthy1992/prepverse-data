/*

https://leetcode.com/problems/minimum-window-substring/solution/
*/

/* tags: [Amazon] */

/* statement */
/*
Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.



Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.


Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.


Follow up: Could you find an algorithm that runs in O(m + n) time?

*/
/* solution */
function minWindowSubstring(s, t) {
  let result = "";
  let minLen = Number.MAX_SAFE_INTEGER;
  const map = new Map();
  let counter = t.length;
  let begin = 0;
  let end = 0;

  for (const character of t) {
    if (map.has(character)) {
      map.set(character, map.get(character) + 1);
    } else {
      map.set(character, 1);
    }
  }

  while (end <= s.length) {
    if (counter === 0) {
      const beginChar = s[begin];
      if (end - begin < minLen) {
        minLen = end - begin;
        result = s.substring(begin, end);
      }
      if (map.has(beginChar)) {
        map.set(beginChar, map.get(beginChar) + 1);
        if (map.get(beginChar) > 0) {
          counter++;
        }
      }
      begin++;
    } else {
      const endChar = s[end];
      if (map.has(endChar)) {
        map.set(endChar, map.get(endChar) - 1);
        if (map.get(endChar) >= 0) {
          counter--;
        }
      }
      end++;
    }
  }

  return result;
}

console.log(minWindowSubstring("ADOBECODEBANC", "ABC"));
