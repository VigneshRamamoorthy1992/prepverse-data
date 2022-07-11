/* tags: [Amazon,Microsoft] */
/* statement */

/*
    given a string reverse it without using inbuild functions

    <pre>
    Example 1:
    let str = "prepverse";
    result string "esrevperp"
    </pre>
 */

/* solution */

var reverseString = function (s) {
  let finalStr = "";
  for (let c of s) {
    finalStr = c + finalStr;
  }

  return finalStr;
};
