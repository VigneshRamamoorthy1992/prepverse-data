/* 
has path from source to destination
conditions: cyclic and undirected graph
time: O(n2)
space: O(n) 
*/

/* solution */

function undirectedPath(edges, source, destination) {
  const graph = buildGraph(edges);
  console.log(graph);
  const visited = new Set();
  return hasPath_dfs(graph, source, destination, visited);
}

function buildGraph(edges) {
  const graph = {};
  for (let edge of edges) {
    if (!(edge[0] in graph)) graph[edge[0]] = [];
    if (!(edge[1] in graph)) graph[edge[1]] = [];
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
  }
  return graph;
}

function hasPath_dfs(graph, source, destination, visited) {
  if (source === destination) return true;
  if (visited.has(source)) return false;
  visited.add(source);

  for (let neighbor of graph[source]) {
    if (hasPath_dfs(graph, neighbor, destination, visited) === true) {
      return true;
    }
  }

  return false;
}

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.log(undirectedPath(edges, "j", "m")); // -> true
