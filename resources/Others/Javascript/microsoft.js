function solution(A) {
  const numberOfBrushStrokes = A.reduce(function (preVal, curVal, index, arr) {
    const max = Math.max(0, curVal - A[index - 1]);
    console.log("index : ", index);
    if ((preVal + max > 1, 000, 000, 000)) {
      arr = arr.splice(1);
      return -1;
    }
    return preVal + max;
  });

  return numberOfBrushStrokes;
}

console.log("result:", solution([1, 2, 3, 4, 4, 5, 5, 6, 5, 5]));
