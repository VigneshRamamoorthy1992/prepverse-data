
{/* <form id="parent">
	<input type="text" name="foo.bat" />
	<input type="text" name="foo.bar.baz" />
	<input type="text" name="fizz" />
</form>
Write a function (in JS) that returns an object with values of text inputs in the form id passed to it.
For eg:

getValues("parent") should return object like

{
	"foo": {
		"bat" : _____, //Actual value of 1st text box
		"bar" : {
			"baz" : _____ // Value of 2nd text box
		}
	},
	"fizz" : _____ // Value of 3rd text box
} */}

function getValues(id) {
	let element = document.querySelector(`#${id}`);
 let inputs = element.querySelectorAll('input[type="text"]');

  let obj = {};

  for(let input of inputs) {
  	let inputValue = input.value;
  	let names = input.name.split('.');
		let tmpObject = obj;
    for (let i = 0; i < names.length; i++) {
    	 tmpObject[names[i]] = {...tmpObject[names[i]]};

       if (i === names.length - 1) {
         tmpObject[names[i]] = inputValue;
       } else {
         tmpObject = tmpObject[names[i]];
       }
     }
  }

  return obj;
}

let json = getValues('parent');
console.log(json);