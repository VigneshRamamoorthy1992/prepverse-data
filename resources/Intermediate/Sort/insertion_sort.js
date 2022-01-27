
const arr_num = [21, 10, 90, 65, 12, 55, 72, 11, 8];

/* 
    sort the given array
    O(n2) - worst case- time complexity
    takes 2nd item compare to all others prior and shift all the elements to right and assign the value to the position where current value is greater than left
*/

function insertion_sort(arr) {

    for (let i = 1; i <= arr.length - 1; i++) {
        const current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }

    return arr;
}

console.log("insertion_sort item:", insertion_sort(arr_num));