/*
https://leetcode.com/problems/basic-calculator-ii/
*/
/* tags: [Amazon] */

/* statement */
/*
Given a string s which represents an expression, evaluate this expression and return its value.

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().



Example 1:

Input: s = "3+2*2"
Output: 7
Example 2:

Input: s = " 3/2 "
Output: 1
Example 3:

Input: s = " 3+5 / 2 "
Output: 5


Constraints:

1 <= s.length <= 3 * 105
s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
s represents a valid expression.
All the integers in the expression are non-negative integers in the range [0, 231 - 1].
The answer is guaranteed to fit in a 32-bit integer.

*/

/* solution */

var calculate = function (s) {
  let stack = [];
  let num = "";
  let sign = null;
  // we loop till the full length of the array to account for last sign
  for (let i = 0; i <= s.length; i++) {
    const curr = s[i];
    //handle space
    if (curr === " ") continue;
    //if char is a number
    if (!isNaN(curr)) num += curr;

    console.log("1:: ", num);
    //if we have a  sign + - / *
    if (isNaN(curr)) {
      // /\D/.test()
      num = Number(num);
      console.log("curr: ", curr);
      switch (sign) {
        case "+":
        case null:
          //we push the initial number into the stack
          stack.push(num);
          break;
        case "-":
          //we push any values after the subtraction sign as negative
          stack.push(-num);
          break;
        case "*":
          //we pop the stack then multiply and push back
          stack.push(stack.pop() * num);
          break;
        case "/":
          //we pop the stack then devide and push back
          stack.push(parseInt(stack.pop() / num, 10));
          break;
      }

      console.log(stack);
      // sign becomes current sign
      sign = curr;
      // we reset num
      num = "";
    }
  }
  //we reduce the array adding positive and negative numbers
  return stack.reduce((a, b) => {
    return a + b;
  }, 0);
};

calculate("33-2*2/2");

2 + 6 * 3 + 5 - ((3 * 14) / 7 + 2) * 5 + 3;
