/* 
 https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 https://leetcode.com/explore/interview/card/microsoft/31/trees-and-graphs/163/
 
 */
/* tags: [Microsoft] */
/* statement */
/*
You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:
<pre>
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
</pre>
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.


<pre>
Example 1:

Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
Example 2:

Input: root = []
Output: []


Constraints:

The number of nodes in the tree is in the range [0, 212 - 1].
-1000 <= Node.val <= 1000
</pre>

Follow-up:

You may only use constant extra space.
The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.

 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/* solution */

var connect = function (root) {
  if (root == null) return root;
  let queue = [root];
  while (queue.length != 0) {
    let next = [];
    while (queue.length != 0) {
      let node = queue.shift();
      node.next = queue[0] || null;
      if (node.left != null) {
        next.push(node.left);
      }
      if (node.right != null) {
        next.push(node.right);
      }
    }
    queue = next;
  }
  return root;
};
