/* tags: [] */

/* statement */
/* 
Given an array sort it using quick sort

O(n2) - worst case- time complexity
O(nlog n) in best cases - quick_sort is preferred in most cases
takes 1st item in a list as pivot and splits the array into left array(less than pivot) and right array (greater than pivot) and so on as recursion
*/

/* solution */
const arr_num = [21, 10, 90, 65, 12, 55, 72, 11, 8];
function quick_sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr.splice(0, 1);
  const left_arr = [];
  const right_arr = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (pivot > arr[i]) {
      left_arr.push(arr[i]);
    } else {
      right_arr.push(arr[i]);
    }
  }

  const left_sorted = quick_sort(left_arr);
  const right_sorted = quick_sort(right_arr);

  return left_sorted.concat(pivot).concat(right_sorted);
}

const sorted_arr_result = quick_sort(arr_num);
console.log("quick_sort item: ", sorted_arr_result);
