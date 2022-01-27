const arr_num = [10, 90, 65, 12, 55, 72, 11, 8];

/* 
    sort the given array
    0(n2) - time complexity
    create new array - check for the least in the given array and move it to new array continue till the  give array is empty- timesout for larger dataset
*/
const sorted_arr = [];

function selection_sort(arr) {

    let min_num = arr[0];
    let min_num_index = 0;
    for (let i = 1; i <= arr.length - 1; i++) {
        if (arr[i] < min_num) {
            min_num_index = i;
            min_num = arr[i];
        }
    }

    sorted_arr.push(min_num);
    arr.splice(min_num_index, 1)
    if (arr.length === 1) {
        sorted_arr.push(arr[0]);
    } else {
        selection_sort(arr);
    }

    return sorted_arr;
}


const sorted_arr_result = selection_sort(arr_num);
console.log("selection_sort item: ", sorted_arr_result);