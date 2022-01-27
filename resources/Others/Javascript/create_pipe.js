/* tags: [] */

/* statement */
/* 
const times = (y) =>  (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) =>  (x) => x - y
const divide = (y) => (x) => x / y


pipe([
  times(2),
  times(3)
])  
// x * 2 * 3

pipe([
  times(2),
  plus(3),
  times(4)
]) 
// (x * 2 + 3) * 4

pipe([
  times(2),
  subtract(3),
  divide(4)
]) 
// (x * 2 - 3) / 4
 */

/* solution */

function pipe(funcs) {
  return function (arg) {
    let result = arg;
    for (let func of funcs) {
      result = func.call(this, result);
    }
    return result;
  };
}

function pipe(funcs) {
  return function (arg) {
    return funcs.reduce((result, func) => {
      return func.call(this, result);
    }, arg);
  };
}
