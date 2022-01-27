/* tags: [Amazon,Microsoft] */

/* 
time: O(n)
space: O(1)
*/

/* statement */

/*
Given a character array s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by a single space.

Your code must solve the problem in-place, i.e. without allocating extra space.

 

Example 1:

Input: s = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
Example 2:

Input: s = ["a"]
Output: ["a"]
 

Constraints:

1 <= s.length <= 105
s[i] is an English letter (uppercase or lowercase), digit, or space ' '.
There is at least one word in s.
s does not contain leading or trailing spaces.
All the words in s are guaranteed to be separated by a single space. */

/* solution */

var reverseWords = function (s) {
  s = s.reverse();
  let ptr1 = 0;
  let ptr2 = 0;
  while (ptr1 < s.length) {
    while (s[ptr2] != " " && ptr2 < s.length) ptr2 += 1;
    rev(ptr1, ptr2 - 1);
    ptr1 = ptr2 + 1;
    ptr2 = ptr1;
  }

  return s;

  function rev(l, r) {
    while (l < r) {
      let temp = s[l];
      s[l] = s[r];
      s[r] = temp;
      l++;
      r--;
    }
  }
};
