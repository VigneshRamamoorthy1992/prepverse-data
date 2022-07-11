/*
https://leetcode.com/problems/trapping-rain-water/
*/

/* tags: [Amazon] */

/* statement */
/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

<pre>
Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
</pre>
 */

/* solution */

var trap = function (height) {
  let left = [];
  let leftMax = 0;

  for (let i = 0; i < height.length; i++) {
    leftMax = Math.max(height[i], leftMax);
    left[i] = leftMax;
  }

  let right = [];
  let rightMax = 0;

  for (let i = height.length - 1; i >= 0; i--) {
    rightMax = Math.max(height[i], rightMax);
    right[i] = rightMax;
  }

  let totalVolume = 0;
  for (let i = 1; i < height.length - 1; i++) {
    totalVolume += Math.min(left[i], right[i]) - height[i];
  }

  return totalVolume;
};
