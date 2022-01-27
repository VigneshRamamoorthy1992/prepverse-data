/* tags: [] */

/* statement */
/* 
Given an array sort it using merge sort

O(n log n) - worst case- time complexity
takes middle as a pivot,  splits left and right  until its array of length 1 and compares the next array. combines both and so on in recursion
*/

/* solution */

const arr_num = [21, 10, 90, 65, 12, 55, 72, 11, 8, 101, 0, 21, 1];
function merge_sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = Math.floor(arr.length / 2);

  const left_arr = arr.slice(0, pivot);
  const right_arr = arr.slice(pivot);

  const left_arr_sorted = merge_sort(left_arr);
  const right_arr_sorted = merge_sort(right_arr);

  let i = 0;
  let j = 0;

  const sorted_arr = [];
  while (i < left_arr_sorted.length && j < right_arr_sorted.length) {
    if (left_arr_sorted[i] < right_arr_sorted[j]) {
      sorted_arr.push(left_arr_sorted[i]);
      i += 1;
    } else {
      sorted_arr.push(right_arr_sorted[j]);
      j += 1;
    }
  }
  sorted_arr.push(...left_arr_sorted.slice(i));
  sorted_arr.push(...right_arr_sorted.slice(j));

  return sorted_arr;
}

const sorted_arr_result = merge_sort(arr_num);
console.log("merge_sort item: ", sorted_arr_result);
