/* 
find the number of connected components in a give graph
conditions: 
time: O(n2)
space: O(n) 
https://www.youtube.com/watch?v=tWVWeAqZ0WU&t=6887s
*/


function connectedComponentsCount(graph){

    const visited = new Set();
    let count = 0;
    for(let node in graph){
        if(explore(graph, node, visited) === true){
            count +=1;
        }
    }
    return count;
}

function explore(graph, current, visited){
    if(visited.has(String(current)) === true) return false;
    visited.add(String(current));

    for(let neighbor of graph[current]){
        explore(graph, neighbor, visited);
    }

    return true;
}

const result = connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
  }); // -> 2

  console.log(result);