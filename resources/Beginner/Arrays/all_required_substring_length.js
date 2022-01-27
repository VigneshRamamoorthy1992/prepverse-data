/* tags: [Amazon] */

/* statement */
/*
    given a string "aabbbc" find all the required lengths of a string aa bbb c
    max length of consequtive string is 3 so required char for others is 2 return 3
 */

/* solution */
function sonultionStr(S) {
  let chars = S.split("");

  let currentChar = chars[0];
  let currentString = "";

  let arr = [];
  for (let char of chars) {
    if (char === currentChar) {
      currentString += char;
    } else {
      arr.push([currentString, currentString.length]);
      currentString = char;
      currentChar = char;
    }
  }
  arr.push([currentString, currentString.length]);
  let maxLength = findMaxLength(arr);
  return findCharLengthRequired(arr, maxLength);
}

function findCharLengthRequired(arr, maxLength) {
  let total = 0;
  for (let data of arr) {
    let [_, count] = data;
    total += maxLength - count;
  }
  return total;
}

function findMaxLength(arrs) {
  let maxLength = 0;
  for (let arr of arrs) {
    let [_, count] = arr;
    if (count > maxLength) {
      maxLength = count;
    }
  }
  return maxLength;
}
console.log(sonultionStr("aabbbcc"));
