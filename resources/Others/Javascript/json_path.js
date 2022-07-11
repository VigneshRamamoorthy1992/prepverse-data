/* statement */
/*
Given an object and a path.
retrive the value in the path

<pre>
pathString = "x[0].y.z"

obj = {
  x:[
    {
      y:{
        z:"works"
      }
    }
  ]
}

return "works"
</pre>

*/

/* solution */

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
