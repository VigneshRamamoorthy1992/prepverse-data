/* tags: [Walmart] */

/* solution */
function total() {
  var arr = [1, 20, 30];
  var total = 0;
  const promise = new Promise((resolve, reject) => {
    for (let x of arr) {
      setTimeout(function () {
        total += x;
        if (x === arr[arr.length - 1]) return resolve(total);
      }, 100);
    }
  });

  return promise;
}

total().then((val) => console.log(val));
