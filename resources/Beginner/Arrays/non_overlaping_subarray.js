/* tags: [Amazon] */

/* statement */
/*
 given an array build non overlaping sub array
 */

/* solution */

function maxNonOverLapping(A) {
  let ends = [...new Array(A.length + 1)].map((e) => 0);
  let indexes = new Map();
  indexes.set(0, 0);
  let sum = 0;
  let max = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    ends[i + 1] = ends[i];
    if (indexes.has(sum)) {
      ends[i + 1] = Math.max(ends[i + 1], ends[indexes.get(sum)] + 1);
    }
    indexes.set(sum, i + 1);
  }

  console.log(ends);
  return ends[A.length];
}

let x = maxNonOverLapping([10, 1, 3, 1, 2, 2, 1, 0, 4]);
console.log(x);
