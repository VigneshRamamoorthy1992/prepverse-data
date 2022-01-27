/* tags: [Microsoft] */

/*
https://leetcode.com/problems/add-two-numbers-ii/
  
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [7,2,4,3], l2 = [5,6,4]
Output: [7,8,0,7]
Example 2:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [8,0,7]


 */
var addTwoNumbers = function (l1, l2) {
  let l1Len = getLen(l1);
  let l2Len = getLen(l2);
  let offset = Math.abs(l1Len - l2Len);
  if (l2Len > l1Len) [l1, l2] = [l2, l1]; // l1 will always be the longer one
  let dummyHead = new ListNode(0);
  dummyHead.val = getCarry(l1, l2, dummyHead, offset);

  return dummyHead.val == 1 ? dummyHead : dummyHead.next;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @param {ListNode} node
 * @param {Number} offset
 */
function getCarry(l1, l2, node, offset) {
  if (l1 == null || l2 == null) return 0;
  node.next = new ListNode(0);
  let sum = 0;
  if (offset > 0) sum = l1.val + getCarry(l1.next, l2, node.next, offset - 1);
  else
    sum = l1.val + l2.val + getCarry(l1.next, l2.next, node.next, offset - 1);

  node.next.val = sum % 10;
  return parseInt(sum / 10); // return the carry
}

/**
 * @param {ListNode} root
 */
function getLen(root) {
  let len = 0;
  while (root) {
    len++;
    root = root.next;
  }
  return len;
}
