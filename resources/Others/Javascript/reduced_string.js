/* Given a string return a reduced string such that , the reduced string has the characters re-arranged

in order of characters having highest frequencey
followed by character which appears just once in the same order as in the original string
and no duplicate characters
Example:

Input: "hello world"
Output: "lohe wrd"
Explaination: 'l' appears thrice, 'o' appears twice, 'h','e', ' '(space) ,'w','r','d' all appear once 
'h','e',' ','w','r','d' should be appended in the same order as they appear in the original string  hello world 
Please try solving using javascript. */

function reduceString(str) {
  // Produce a map that retains order of insertion
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (!map.has(str[i])) {
      map.set(str[i], 1);
    } else {
      map.set(str[i], map.get(str[i]) + 1);
    }
  }

  const mapSorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
  let result = "";
  mapSorted.forEach((entry) => {
    result += entry[0];
  });

  return result;
}
