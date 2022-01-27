/* tags: [] */

/* statement */
/* 

Given an array search it using binary search using recursion

pre-requsit - array has to be sorted**
can return the item / exist or not / index cannot be returned
search for an item and returns its index 
0(log n) - time complexity
*/

/* solution */

const arr_num = [10, 15, 21, 33, 42, 50, 55, 61, 77, 89];
function binary_search_recursion(arr, searchItem) {
  const midpoint = Math.floor(arr.length / 2);
  if (arr[midpoint] === searchItem) {
    return true;
  }

  while (arr.length > 1) {
    if (arr[midpoint] < searchItem) {
      return binary_search_recursion(arr.slice(midpoint + 1), searchItem);
    } else {
      return binary_search_recursion(arr.slice(0, midpoint), searchItem);
    }
  }
  return false;
}

const search_index = binary_search_recursion(arr_num, 10);
console.log("binary_recursion_search item index: ", search_index);
