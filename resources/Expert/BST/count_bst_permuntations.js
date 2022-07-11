/*
catalan number
catalan (n) is sum of catalan(i)* catalan(n-i-1)

*/

/* tags: [] */

/* statement */
/*
  Given an array count all the possible bst permuntations
*/
/* solution */
function catalan(n){
  if(n <= 1) return 1;
  let res = 0;
  for(let i =0; i<n; i++){
    res += catalan(i) * catalan(n-i-1)
  }
  return res;
}

console.log(catalan(2));