/* statement */
/*
 Given a undirected graph find whether node values are in sequence

*/

/* solution */

function solution(N, A, B) {
  const graph = build(A, B);
  let start = 1;
  console.log(graph);
  while (start < N) {
    const key = `${start}`;
    const next = `${start + 1}`;
    if (!graph[key] || !graph[key].includes(next)) return false;
    start++;
  }
  return true;
}

function build(A, B) {
  const graph = {};
  for (let i = 0; i < A.length; i++) {
    const first = `${A[i]}`;
    const next = `${B[i]}`;
    if (!graph[first]) graph[first] = [];
    if (!graph[next]) graph[next] = [];
    graph[first].push(next);
    graph[next].push(first);
  }
  return graph;
}
