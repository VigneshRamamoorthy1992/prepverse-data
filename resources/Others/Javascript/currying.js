/* solution */

function nameConstructor(firstName) {
  return function (lastName) {
    return function (age) {
      return firstName + " " + lastName + " | " + age;
    };
  };
}

console.log(nameConstructor("viki")("ram")(28));
