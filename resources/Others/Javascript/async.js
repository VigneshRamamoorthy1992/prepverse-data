/* callback, promise, promise.all, asyn, await
https://www.youtube.com/watch?v=PoRJizFvM7s
https://www.youtube.com/watch?v=vn3tm0quoqE
 */

/* solution */

function setTimeoutPromise(delay) {
  function resolver(resolve) {
    setTimeout(resolve(), delay);
  }
  return new Promise(resolver);
}

const timeOutPromise = setTimeoutPromise(4000);

timeOutPromise.then(() => {
  console.log("Hello World");
});
