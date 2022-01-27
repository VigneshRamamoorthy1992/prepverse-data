/* tags: [Amazon] */

/* statement */
/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 
<pre>
<code>
Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
<code>
<pre>
*/

/* solution */
function threeSum(nums, target) {
  const results = [];
  if (nums.length < 3) return results;

  nums = nums.sort((a, b) => a - b);

  // let target = 0

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) break;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;

    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum === target) {
        results.push([nums[i], nums[j], nums[k]]);

        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        j++;
        k--;
      } else if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return results;
}

// console.log(threeSum([-1,0,1,2,-1,-4]));

console.log(threeSum([1, 7, 2, 5, 6, 2, 0], 8));
