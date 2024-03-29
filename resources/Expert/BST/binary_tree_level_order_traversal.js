/*

https://leetcode.com/problems/binary-tree-level-order-traversal/
*/
/* tags: [Amazon, Microsoft] */

/* statement */
/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

<pre>
Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []


Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
</pre>
*/

/* solution */
var levelOrder = function (root) {
  if (!root) return [];

  const queue = [root];
  const retVal = [];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let levelValues = [];
    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();
      levelValues.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    retVal.push(levelValues);
    levelValues = [];
  }

  return retVal;
};
