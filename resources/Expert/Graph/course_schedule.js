/* statement */
/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

</pre>
Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

Constraints:

1 <= numCourses <= 105
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.
</pre>
*/

/* solution */

var canFinish = function (numCourses, prerequisites) {
  const graph = prerequisites.reduce((acc, [from, to]) => {
    if (!acc[from]) acc[from] = [];
    if (!acc[to]) acc[to] = [];

    acc[from].push(to);
    return acc;
  }, {});

  const visited = {};
  let visiting = {};

  const isCyclic = (course) => {
    if (visiting[course]) return true;
    visiting[course] = true;

    for (let i = 0; i < graph[course].length; i++) {
      if (!visited[course] && isCyclic(graph[course][i])) {
        return true;
      }
    }

    visiting[course] = false;
    visited[course] = true;
    return false;
  };

  for (let course in graph) {
    if (isCyclic(course)) return false;
  }

  return true;
};

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

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const indegree = new Array(numCourses).fill(0);
  const queue = [];
  /**
   * The goal is to find whether the course graph has cycles.
   *
   * We are looking for the number of indgree for each course and
   * put the course with no indegree into the queue. As we go
   * through the courses in queue, we break off the dependency(edge)
   * from the current course in queue in all the prerequisite
   * pairs. Then we put all the courses with zero indegree into
   * the queue. Repeat until the queue is empty. We maintain a
   * count and increment it each time we pop the queue. The count
   * will equal to the number of courses when there's no cycle and it
   * is possible to take all the courses.
   *
   * directed graph denotes: [prereq] --> [course]
   */
  for (const [course, prereq] of prerequisites) {
    indegree[course] += 1;
  }
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }
  let count = 0;

  while (queue.length !== 0) {
    const c = queue.pop();
    count += 1;

    for (const [course, prereq] of prerequisites) {
      if (prereq === c) {
        indegree[course] -= 1;
        if (indegree[course] === 0) {
          queue.push(course);
        }
      }
    }
  }
  return count === numCourses;
};
