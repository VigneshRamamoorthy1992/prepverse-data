/* tags: [] */

/* statement */
/*
  Given an array count all the possible bst permuntations
*/
/* solution */
function processData(input) {
  input.sort(function (a, b) {
    return a - b;
  });

  var max = input[1] - input[0];
  var maxPairs = [input[0], input[1]];

  for (var i = 2; i < input.length; i++) {
    var prev = input[i - 1];
    var next = input[i];
    var diff = next - prev;

    if (diff < max) {
      max = diff;
      maxPairs = [prev, next];
    } else if (diff === max) {
      maxPairs = maxPairs.concat([prev, next]);
    }
  }

  console.log(maxPairs.join(" "));
}
processData([4, 2, 1, 3]);
