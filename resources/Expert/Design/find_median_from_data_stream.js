/* tags: [] */

/* statement */
/*
The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

For example, for arr = [2,3,4], the median is 3.
For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
 

Example 1:

Input
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]

Explanation
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0

*/
/* solution */

class MedianFinder {
  constructor() {
    // set up array
    this.arr = [];
  }

  /**
   * @param {number} num
   * @return {void}
   */
  addNum(num) {
    // check if array is size 0, just push
    if (this.arr.length === 0) {
      this.arr.push(num);
      return;
    }

    // left and right pointers for binary search
    let l = 0;
    let r = this.arr.length;

    // keep going until pointers meet
    while (l < r) {
      // get mid point
      const mid = Math.floor((l + r) / 2);
      // check if we can insert at mid
      if (num > this.arr[mid]) {
        // search right half of array
        l = mid + 1;
      } else {
        // search left half of array
        r = mid;
      }
    }

    // we can insert at left pointer
    this.arr.splice(l, 0, num);
  }

  /**
   * @return {number}
   */
  findMedian() {
    // if odd, return middle, if even, return avg of two middle
    const mid = Math.floor(this.arr.length / 2);
    return (this.arr.length & 1) === 1
      ? this.arr[mid]
      : (this.arr[mid] + this.arr[mid - 1]) / 2;
  }
}
