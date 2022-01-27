/*
https://leetcode.com/problems/symmetric-tree/

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).



Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false


Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100


Follow up: Could you solve it both recursively and iteratively?

*/

var isSymmetric = function (root) {
  const queue = [];

  queue.push(root, root);

  while (queue.length > 0) {
    const node1 = queue.shift();
    const node2 = queue.shift();

    if (node1 == null && node2 == null) continue;
    if (node1 == null || node2 == null) return false;
    if (node1.val != node2.val) return false;

    queue.push(node1.left, node2.right);
    queue.push(node1.right, node2.left);
  }

  return true;
};
