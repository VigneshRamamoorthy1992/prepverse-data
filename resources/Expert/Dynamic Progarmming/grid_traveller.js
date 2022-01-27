/* 
grid traveller with memo
conditions: 
time: O(m * n)
space: O(m + n) 
*/

function gridTraveller(m,n, memo = {}) {
  
    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0;
    
    const pos = m + ',' + n;
    if(pos in memo) return memo[pos];

    memo[pos] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
    return memo[pos];
}

console.log(gridTraveller(18,18));