/* 
Serialize and Deserialize Binary Tree
https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

 

Example 1:


Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:

Input: root = [1,2]
Output: [1,2]
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-1000 <= Node.val <= 1000
 */


// e.g.
//    1
//   / \
//  2   3
//     / \
//    4   5
//
// data = [1, 2, null, null, 3, 4, null, null, 5, null, null]

function serialize(root) {
    let data = [];
  
    function go(node) {
      if (node == null) {
        data.push(null);
        return;
      }
  
      data.push(node.val);
      go(node.left);
      go(node.right);
    }
  
    go(root);
    return data;
  }
  
  function deserialize(data) {
    function go() {
      if (data.length === 0) return;
  
      const val = data.shift();
      if (val == null) return null;
  
      const node = new TreeNode(val);
      node.left = go();
      node.right = go();
      return node;
    }
  
    return go();
  }