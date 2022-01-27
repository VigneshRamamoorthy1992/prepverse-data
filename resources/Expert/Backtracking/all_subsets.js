/* tags: [] */

/* statement */

/*
  Given an array get all the subsets of an array
*/
/* solution */
const getAllSubsets = (theArray) =>
  theArray.reduce(
    (subsets, value) => {
      let x = subsets.concat(subsets.map((set) => [value, ...set]));
      console.log(x);
      return x;
    },
    [[]]
  );

console.log(getAllSubsets([1, 2, 3, 5, 6, 7]));
