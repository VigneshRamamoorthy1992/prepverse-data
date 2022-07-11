/*
https://leetcode.com/problems/first-unique-character-in-a-string/

*/

/* tags: [Amazon] */

/* statement */

/*

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

<pre>
Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1


Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
</pre>
*/

/* solution */
let firstUniqChar = function (s) {
  let map = new Map();
  for (let x of s) {
    if (map.has(x)) {
      map.set(x, map.get(x) + 1);
    } else {
      map.set(x, 0);
    }
  }
  console.log(map, "map");
  for (let [k, v] of map) {
    if (v === 0) {
      let val = s.indexOf(k);
      return val;
    }
  }
};
