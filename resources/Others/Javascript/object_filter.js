let obj1 = {
  a: 1,
  b: {
    c: 2,
    d: -3,
    e: {
      f: {
        g: -4,
      },
    },
    h: {
      i: 5,
      j: 6,
    },
  },
};

let obj2 = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: "Good Night Moon",
  },
};

function myEmpty(obj) {
  return typeof obj === "object" && Object.keys(obj).length === 0;
}

let filterDeep = (obj, filterFun) => {
  let res = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      let innerObj = filterDeep(obj[key], filterFun);

      if (!myEmpty(innerObj)) {
        res[key] = innerObj;
      }
    } else if (filterFun(obj[key])) {
      res[key] = obj[key];
    }
  }
  return res;
};

console.log(filterDeep(obj1, (n) => n >= 0));
console.log(filterDeep(obj2, (s) => typeof s === "string"));
