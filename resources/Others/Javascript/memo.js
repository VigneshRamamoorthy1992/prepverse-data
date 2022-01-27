/* tags: [Walmart] */

/* solution */

function memo(func, resolver = (...args) => args.join("_")) {
  const cache = new Map();

  return function (...args) {
    const cacheKey = resolver(...args);
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    const value = func.apply(this, args);
    cache.set(cacheKey, value);
    return value;
  };
}

const memoed = memo(func, () => "samekey");

memoed(1, 2);
// 3, func is called, 3 is cached with key 'samekey'

memoed(1, 2);
// 3, since key is the same, 3 is returned without calling func

memoed(1, 3);
// 3, since key is the same, 3 is returned without calling func

// solution 2
function useMemo(func) {
  let map = new Map();

  return (...a) => {
    let key = [...a].join("_");
    if (map.has(key)) {
      console.log("memo");
      return map.get(key);
    } else {
      let calFun = func(...a);
      map.set(key, calFun);
      return calFun;
    }
  };
}

const sumMemo = useMemo((a, b) => {
  console.log("Calling", a, b);
  return a + b;
});

sumMemo(1, 2);
sumMemo(1, 2);
sumMemo(2, 1);
