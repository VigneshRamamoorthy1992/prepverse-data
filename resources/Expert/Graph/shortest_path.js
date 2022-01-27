/* 
find the shortest path in a give graph
conditions: 
time: O(n2)
space: O(n) 
*/

/* solution */

function shortestPath(edges, source, destination) {
  const graph = buildGraph(edges);
  console.log(graph);
  const visited = new Set([source]);
  const queue = [[source, 0]];

  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    if (node === destination) return distance;
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  return -1;
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

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

const result = shortestPath(edges, "w", "z"); // -> 2
console.log(result);
