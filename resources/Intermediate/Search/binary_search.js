
const arr_num = [-10, 15, 21, 33, 42, 50, 55, 61, 77, 89];

/* 
  **pre-requsit - array has to be sorted**
    can return index / item
    search for an item and returns its index 
    0(log n) - time complexity
*/

function binary_search(arr, searchItem) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const midpoint = Math.floor((left + right) / 2);
        if (arr[midpoint] === searchItem) {
            return midpoint;
        } else if (arr[midpoint] < searchItem) {
            left = midpoint + 1;
        } else {
            right = midpoint - 1;
        }
    }
    return null;
}

const search_index = binary_search(arr_num, -10);
console.log("binary_search item index: ", search_index);