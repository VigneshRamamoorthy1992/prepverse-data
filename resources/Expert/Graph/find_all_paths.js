const graph = {
  f: ["g", "i"],
  g: ["h", "k"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

function soultion(graph, src, dest) {
  const result = [];
  const dfs = (src, path = []) => {
    if (src === dest) {
      result.push([...path, src]);
      return;
    }

    for (let neighbor of graph[src]) {
      dfs(neighbor, [...path, src]);
    }
  };

  dfs(src);
  return result;
}

console.log(soultion(graph, "f", "k"));
