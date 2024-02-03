### Below is the sample format for contribution

for any queries reachout to `vigneshme2011@gmail.com`

#### /* Transient  `<-- additional details, won't be shown in prepverse.net`
```
sum of 2 numbers
conditions:
time: O(n)
space: O(n)
```
#### */
#### /* tags: [Amazon, Microsoft] */ `<-- compaines asked this question in interviews`

#### /* statement */ `<-- problem statement`
#### /*
```
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

<pre>
<code>
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
</code>
</pre>
```
#### */

#### /* solution */ `<-- solution for the problem`
```
function twoSum(arr, target) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let pair = target - arr[i];
    if (pair in map) {
      return [map[pair], i];
    } else {
      map[arr[i]] = i;
    }
    console.log(map);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 26));

// using sliding window
var twoSum = function (nums, target) {
  let left = 0;
  let right = 0;

  let currentSum = 0;

  for (let num of nums) {
    currentSum += num;

    while (currentSum > target) {
      currentSum -= nums[left];
      left += 1;
    }
    if (currentSum === target) {
      return [left, right];
    }
    right += 1;
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 7));
```
