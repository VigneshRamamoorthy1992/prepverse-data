// function combination() {
//   const ar = [100];
//   ar.forEach((e) => console.log(numOfBST(e)));
// }

// function numOfBST(key) {
//   const catalanNumber =
//     factorial(2 * key) / (factorial(key + 1) * factorial(key));
//   return Math.ceil(catalanNumber);
// }

// function factorial(n) {
//   if (n < 0) return;
//   if (n < 2) return 1;
//   return n * factorial(n - 1);
// }

// // function factorial(num) {
// //   let fact = 1;
// //   if (num == 0) return 1;
// //   else {
// //     while (num > 1) {
// //       fact = fact * num;
// //       console.log("fact222: ", fact);
// //       num--;
// //     }
// //     console.log("fact: ", fact);
// //     return fact;
// //   }
// // }

// combination();

// var numTrees = function (n) {
//   let G = new Array(n + 1).fill(0);
//   G[0] = 1;
//   G[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       G[i] += G[j - 1] * G[i - j];
//     }
//   }

//   return G[n] % 100000007;
// };

// console.log(numTrees(100));

// var numTrees = function (n) {
//   const cache = [];
//   const x = numTreeMemo(n, cache);
//   return x % 100000007;
// };

// var numTreeMemo = function (n, cache) {
//   // Base case
//   if (n == 1) return 1;
//   // If we solved for n before, return saved answer
//   if (cache[n]) return cache[n];

//   let totalTrees = 0;
//   //Pick each 'node' once as the root node
//   for (let root = 1; root <= n; root++) {
//     let leftTrees = 1;
//     //Determine the number of unique BST on the left side of the root
//     if (root > 1) leftTrees = numTreeMemo(root - 1, cache);
//     let rightTrees = 1;
//     // And then on the right
//     if (root < n) rightTrees = numTreeMemo(n - root, cache);
//     //If left has 2 unique trees, and right has 3
//     //that equals 2 * 3 for the total combinations
//     totalTrees += leftTrees * rightTrees;
//   }
//   cache[n] = totalTrees;
//   return totalTrees;
// };

// console.log(numTrees(100));

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
