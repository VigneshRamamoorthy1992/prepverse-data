/* tags: [Amazon,Microsoft] */
/* statement */

/*
    given a string reverse it without using inbuild functions

    ex:
    let str = "prepverse";
    result string "esrevperp"
 */

/* solution */

var reverseString = function (s) {
  let finalStr = "";
  for (let c of s) {
    finalStr = c + finalStr;
  }

  return finalStr;
};
