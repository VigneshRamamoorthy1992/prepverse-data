/* tags: [Walmart] */
/* statement */
/*
Given a below code 
wt's the value of <pre>total</pre>
how to make settimeout to print <pre>51</pre>
<pre>
arr = [1,20,30];
for (var x in arr) {
      setTimeout(function () {
      total += x;
  }, 100);
}

console.log(total)
</pre>


*/

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
