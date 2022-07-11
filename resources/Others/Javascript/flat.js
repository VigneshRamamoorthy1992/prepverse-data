/* tags: [Walmart] */
/* statement */
/*
Given an multi dimentional array flatten the array without using default <pre>flat</pre> method
*/

/* solution */

let arr = [
  1,
  2,
  3,
  4,
  5,
  [6, 7, 8, [9, 10, [11, 12, 13, [14, 15], 16], 17], 18],
  19,
  20,
  [21, 22, [23]],
];

const flatten = (arr) => {
  flatArr = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
  return flatArr;
};

console.log(flatten(arr));
