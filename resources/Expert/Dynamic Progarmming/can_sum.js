/* 
can sum with memo
conditions: 
time: O(m * n)
space: O(m) 
m - target sum 
n - length of an array
https://www.youtube.com/watch?v=oBt53YbR9Kk&t=9994s
*/


function canSum(targetSum, numbers, memo={}) {
    if(targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for(let num of numbers){
        const remainder = targetSum - num;
    
        if( canSum(remainder, numbers, memo) === true){
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return memo[targetSum];
}

console.log(canSum(8,[2,3,5]));
console.log(canSum(300,[7,14]));