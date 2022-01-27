const arr_num = [10, 90, 65, 12, 55, 72, 11, 8];

/* 
    search for an item and returns its index 
    0(n) - time complexity
*/

function linear_search(arr, searchItem) {
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === searchItem) {
            return i;
        }
    }
}

const search_index = linear_search(arr_num, 555);
console.log("linear_search item index: ", search_index);