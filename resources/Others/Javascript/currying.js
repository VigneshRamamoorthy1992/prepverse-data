/* statement */
/*
  Build a function to demonstrate currying in javascript

  what us <a href="https://javascript.info/currying-partials" target="_blank"><pre>currying</pre></a>
*/

/* solution */

function nameConstructor(firstName) {
  return function (lastName) {
    return function (age) {
      return firstName + " " + lastName + " | " + age;
    };
  };
}

console.log(nameConstructor("viki")("ram")(28));
