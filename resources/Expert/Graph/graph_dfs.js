function dfs(graph, source) {
    const statck = [source];

    while (statck.length > 0){
        const current = statck.pop();

        console.log(current);
        for(let neighbor of graph[current]){
            statck.push(neighbor);
        }
    }
}

function dfs_recursion(graph, source){
    console.log(source);

    for(let neighbor of graph[source]){
        dfs_recursion(graph, neighbor);
    }
}

const graph = {
        a: ['c','b'],
        b: ['d'],
        c: ['e'],
        d: ['f'],
        e: [],
        f: []
};

dfs(graph, 'a');
console.log("------------------");
dfs_recursion(graph, 'a');