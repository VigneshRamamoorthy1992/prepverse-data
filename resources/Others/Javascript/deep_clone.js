/* tags: [Amazon] */
/* statement */
/*
Given a nested object do a deep clone of the object
*/

/* solution */

var deepClone = function (object) {
  var newObject = {};
  for (var key in object) {
    if (typeof object[key] === "object") {
      if (Array.isArray(object[key])) {
        let arr = [];
        for (let obj of object[key]) {
          arr.push(deepClone(obj));
        }
        newObject[key] = arr;
      } else {
        newObject[key] = deepClone(object[key]);
      }
    } else {
      newObject[key] = object[key];
    }
  }
  return newObject;
};

let obj = {
  a: 1,
  c: [
    {
      a: 1,
      b: [
        {
          aa: 22,
        },
      ],
    },
  ],
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};
console.log(JSON.stringify(deepClone(obj)));
