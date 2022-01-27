/*

merge an n sorted list

*/

var mergeKLists = function (lists) {
  if (!lists.length) return null;

  function mergeTwoLists(a, b) {
    const dummyHead = new ListNode();
    let curA = a,
      curB = b,
      curD = dummyHead;

    while (curA && curB) {
      if (curA.val < curB.val) {
        curD.next = curA;
        curA = curA.next;
      } else {
        curD.next = curB;
        curB = curB.next;
      }
      curD = curD.next;
    }
    if (curA) curD.next = curA;
    if (curB) curD.next = curB;
    return dummyHead.next;
  }

  while (lists.length > 1) {
    const a = lists.shift();
    const b = lists.shift();
    const res = mergeTwoLists(a, b);
    lists.push(res);
  }
  return lists[0];
};
