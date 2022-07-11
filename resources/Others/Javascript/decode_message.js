/* statement */
/*
Given a 2D array decode the message diagonally

<pre>
decoded message = "IROCLEK"

[
    ["I", "B", "C", "A", "L", "K", "A"],
    ["D", "R", "F", "C", "A", "E", "A"],
    ["G", "H", "O", "E", "L", "A", "D"],
  ]
</pre>
*/

/* solution */

function decode(message) {
  let i = 0,
    j = 0;
  let ans = "";
  while (message[i] && message[i][j]) {
    ans += message[i][j];
    message[i + 1] ? i++ : i--;
    j++;
  }
  return ans;
}

console.log(
  decode([
    ["I", "B", "C", "A", "L", "K", "A"],
    ["D", "R", "F", "C", "A", "E", "A"],
    ["G", "H", "O", "E", "L", "A", "D"],
  ])
);
