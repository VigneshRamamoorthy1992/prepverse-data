/* callback, promise, promise.all, asyn, await
https://www.youtube.com/watch?v=PoRJizFvM7s
https://www.youtube.com/watch?v=vn3tm0quoqE
 */
/* statement */
/*
Simulate asyn using settimeout
*/
/* solution */

function setTimeoutPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(), delay);
  });
}

const timeOutPromise = setTimeoutPromise(4000);

timeOutPromise.then(() => {
  console.log("Hello World");
});
