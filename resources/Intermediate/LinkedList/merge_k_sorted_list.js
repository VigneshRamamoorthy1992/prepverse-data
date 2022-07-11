/* 
https://leetcode.com/problems/merge-k-sorted-lists/
*/
/* tags: [Microsoft] */

/* statement */
/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 
<pre>
Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
 

Constraints:

k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] is sorted in ascending order.
The sum of lists[i].length won't exceed 10^4. 
</pre>
*/
/* solution */

var mergeKLists_compare_one_by_one = function (lists) {
  if (!lists || !lists.length) return null;
  const findMinNode = (lists = lists) => {
    let index = -1,
      min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < lists.length; i++) {
      if (!lists[i]) continue;
      if (lists[i].val <= min) {
        min = lists[i].val;
        index = i;
      }
    }

    let resNode = null;
    if (index !== -1) {
      resNode = lists[index];
      lists[index] = lists[index].next;
    }
    return resNode;
  };

  let res = new ListNode(-1),
    cur = res,
    temp = findMinNode(lists);
  while (temp) {
    cur.next = temp;
    cur = cur.next;
    temp = findMinNode(lists);
  }
  return res.next;
};
