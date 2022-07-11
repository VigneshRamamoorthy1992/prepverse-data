/* statement */
/*
  Build a function to demonstrate throttle in javascript
*/

/* solution */
let throttleTimer;
const throttle = (callback, time) => {
  if (throttleTimer) return;
  throttleTimer = true;
  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

window.addEventListener("scroll", () => {
  throttle(handleScrollAnimation, 250);
});
