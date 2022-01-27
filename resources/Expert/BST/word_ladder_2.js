/*

https://leetcode.com/problems/word-ladder-ii/description/

A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest transformation sequences from beginWord to endWord, or an empty list if no such sequence exists. Each sequence should be returned as a list of the words [beginWord, s1, s2, ..., sk].



Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
Explanation: There are 2 shortest transformation sequences:
"hit" -> "hot" -> "dot" -> "dog" -> "cog"
"hit" -> "hot" -> "lot" -> "log" -> "cog"
Example 2:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: []
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.


Constraints:

1 <= beginWord.length <= 5
endWord.length == beginWord.length
1 <= wordList.length <= 1000
wordList[i].length == beginWord.length
beginWord, endWord, and wordList[i] consist of lowercase English letters.
beginWord != endWord
All the words in wordList are unique.

*/

var findLadders = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return [];

  const result = [],
    map = new Map(),
    steps = new Map();

  for (const word of wordList) {
    for (let i = 0; i < word.length; i++) {
      const hash = word.substring(0, i) + "*" + word.substring(i + 1);

      if (!map.has(hash)) map.set(hash, []);

      map.get(hash).push(word);
      steps.set(hash, wordList.length);
    }
  }

  const queue = [[beginWord]];

  while (queue.length > 0) {
    const current = queue.shift();
    const set = new Set(current); // for O(1) lookup time
    const lastWord = current[current.length - 1];
    if (lastWord === endWord) {
      if (result.length === 0 || current.length === result[0].length)
        result.push(current);
      else break; // early stop because the current path takes longer
    } else {
      for (let i = 0; i < lastWord.length; i++) {
        const hash = lastWord.substring(0, i) + "*" + lastWord.substring(i + 1);
        if (!map.has(hash) || current.length > steps.get(hash)) continue;

        for (const nextWord of map.get(hash))
          if (!set.has(nextWord))
            // don't want to go back to a word already in the path
            queue.push([...current, nextWord]);

        steps.set(hash, current.length);
      }
    }
  }
  return result;
};
