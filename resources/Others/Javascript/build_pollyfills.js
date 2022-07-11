/* tags: [Walmart] */
/* statement */
/*
Build pollyfills for javascript functions
array.map, array.reduce, array.filter and function.bind

<pre>
    let arr = [1, 2, 3, 1, 1];
    arr.map((currentValue, index, array)=>{})
    arr.reduce((accumulator,currentValue,index,array)=>{accumulator += currentValue},initialValue);
    arr.filter((e) => e === 1)
</pre>
 */

// MAP

/* solution */

Array.prototype.map = function (callback) {
  console.log("own prototype method!");
  if (!this) throw new Error(`Cannot use 'map' on ${this}`);

  const arr = this;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    const mappedValue = callback(currentValue, i, arr);
    result.push(mappedValue);
  }

  return result;
};

const arr = [1, 2, 3];
console.log(arr.map((val) => val * 2));

// REDUCE
Array.prototype.reduce = function (reduce, initialValue) {
  console.log("my reduce ");
  const arr = this;
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    accumulator = reduce(accumulator, currentValue, i, arr);
  }
  return accumulator;
};

console.log(
  arr.reduce((acc, val) => {
    acc += val;
    return acc;
  }, 0)
);

console.log(
  [11, 12, 13].reduce((accumulator, currentValue, index, array) => {
    accumulator += currentValue;
    return accumulator;
  }, 0)
);

//FILTER
Array.prototype.filter = function (fn) {
  if (!this) {
    throw `cannot use filter in ${this}`;
  }

  let data = this;
  let result = [];

  for (let i = 0; i < this.length; i++) {
    const fnresult = fn(data[i], i, data);
    if (fnresult) {
      result.push(data[i]);
    }
  }

  return result;
};

console.log([1, 2, 3, 1, 1].filter((e) => e === 1));

// BIND

Function.prototype.bind = function () {
  var fn = this,
    args = Array.prototype.slice.call(arguments),
    object = args.shift();

  return function () {
    return fn.apply(object, args.concat(Array.prototype.slice.call(arguments)));
  };
};

// APPLY
