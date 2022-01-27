/* 
find the largest of connected components in a give graph
conditions: 
time: O(n2)
space: O(n) 
*/

/* solution */

function largestComponent(graph) {
  const visited = new Set();
  let largest = 0;
  for (let node in graph) {
    const size = explore(graph, node, visited);
    if (size > largest) {
      largest = size;
    }
  }
  return largest;
}

function explore(graph, current, visited) {
  if (visited.has(String(current)) === true) return 0;
  visited.add(String(current));

  let count = 1;
  for (let neighbor of graph[current]) {
    count += explore(graph, neighbor, visited);
  }

  return count;
}

const result = largestComponent({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
}); // -> 4

console.log(result);
