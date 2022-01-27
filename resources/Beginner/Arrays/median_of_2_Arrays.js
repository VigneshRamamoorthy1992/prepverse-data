/*
median of 2 arr
conditions:
time: O(n(log n))
space:

https://leetcode.com/problems/median-of-two-sorted-arrays/
*/

/* tags: [Amazon] */

/* statement */
/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).



Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106

*/

/* solution */
function medianOf2Arr(arr1, arr2) {
  arr1 = arr1.concat(arr2).sort((a, b) => a - b);
  console.log(arr1);

  let len = arr1.length;

  if (len % 2 === 1) return arr1[Math.floor(len / 2)];
  else return (arr1[len / 2 - 1] + arr1[len / 2]) / 2;
}

console.log(medianOf2Arr([1, 4, 7, 9], [2, 5, 8, 10]));
