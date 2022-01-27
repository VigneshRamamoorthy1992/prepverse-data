function getValue(obj, str) {
  str = str.replaceAll("[", ".");
  str = str.replaceAll("]", "");

  str = str.split(".");
  let temp = {
    ...obj,
  };

  str.forEach((key) => {
    temp = temp[key];
  });

  return temp;
}

console.log(getValue(obj, "x[0].y.z"));
