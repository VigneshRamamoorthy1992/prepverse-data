/* statement */
/*
  Build a function to demonstrate debounce in javascript
*/

/* solution */

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
function saveInput() {
  console.log("Saving data");
}
const processChange = debounce(() => saveInput());
