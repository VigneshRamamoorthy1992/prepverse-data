/* 
has path from source to destination
conditions: acyclic and directed graph
time: O(n2)
space: O(n) 
*/
/* statement */
/*
Given a graph find whether path from source to destination exist

conditions: acyclic and directed graph

*/
/* solution */

function hasPath_dfs(graph, source, destination) {
  if (source === destination) return true;

  for (let neighbor of graph[source]) {
    if (hasPath_dfs(graph, neighbor, destination) === true) {
      return true;
    }
  }

  return false;
}

function hasPath_bfs(graph, source, destination) {
  const queue = [source];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === destination) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
}
const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

console.log(hasPath_dfs(graph, "f", "k")); // true
console.log(hasPath_bfs(graph, "f", "k")); // true
