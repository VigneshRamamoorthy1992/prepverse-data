/* tags: [Amazon] */

/* statement */
/*
https://leetcode.com/problems/guess-the-word/

This is an interactive problem.

You are given an array of unique strings wordlist where wordlist[i] is 6 letters long, and one word in this list is chosen as secret.

You may call Master.guess(word) to guess a word. The guessed word should have type string and must be from the original list with 6 lowercase letters.

This function returns an integer type, representing the number of exact matches (value and position) of your guess to the secret word. Also, if your guess is not in the given wordlist, it will return -1 instead.

For each test case, you have exactly 10 guesses to guess the word. At the end of any number of calls, if you have made 10 or fewer calls to Master.guess and at least one of these guesses was secret, then you pass the test case.



Example 1:

Input: secret = "acckzz", wordlist = ["acckzz","ccbazz","eiowzz","abcczz"], numguesses = 10
Output: You guessed the secret word correctly.
Explanation:
master.guess("aaaaaa") returns -1, because "aaaaaa" is not in wordlist.
master.guess("acckzz") returns 6, because "acckzz" is secret and has all 6 matches.
master.guess("ccbazz") returns 3, because "ccbazz" has 3 matches.
master.guess("eiowzz") returns 2, because "eiowzz" has 2 matches.
master.guess("abcczz") returns 4, because "abcczz" has 4 matches.
We made 5 calls to master.guess and one of them was the secret, so we pass the test case.
Example 2:

Input: secret = "hamada", wordlist = ["hamada","khaled"], numguesses = 10
Output: You guessed the secret word correctly.


Constraints:

1 <= wordlist.length <= 100
wordlist[i].length == 6
wordlist[i] consist of lowercase English letters.
All the strings of wordlist are unique.
secret exists in wordlist.
numguesses == 10


// guess word console.log(arr)
[
  [
    2, 0, 1, 0, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0
  ],
  [
    0, 1, 2, 0, 0, 0, 0, 0,
    1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0
  ],
  [
    0, 1, 2, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0
  ],
  [
    1, 0, 1, 0, 0, 0, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1, 0,
    0, 0
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 4
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 4
  ]
]
acckzz  :  15

*/
/* solution */
var findSecretWord = function (wordlist, master) {
  while (wordlist.length > 0) {
    let guess_word = findGuessWord(wordlist);
    let matchCount = master.guess(guess_word);

    if (matchCount === 6) return guess_word;

    console.log("bw: ", guess_word, " : ", matchCount);
    wordlist = filterWord(wordlist, guess_word, matchCount);
  }
};

function findGuessWord(wordlist) {
  let arr = [...Array(6)].map((e) => Array(26).fill(0));

  for (let i = 0; i < wordlist.length; i++) {
    for (let j = 0; j < wordlist[i].length; j++) {
      arr[j][wordlist[i][j].charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
  }
  console.log(arr);

  let best_word = "";
  let best_count = 0;

  for (let i = 0; i < wordlist.length; i++) {
    let curr_count = 0;
    for (let j = 0; j < wordlist[i].length; j++) {
      curr_count += arr[j][wordlist[i][j].charCodeAt(0) - "a".charCodeAt(0)];
    }
    if (curr_count > best_count) {
      best_count = curr_count;
      best_word = wordlist[i];
    }
  }
  console.log(best_word, " : ", best_count);
  return best_word;
}

function filterWord(wordlist, guess_word, matchCount) {
  // if(matchCount = -1) return wordlist.filter(f=> f!== guess_word);
  let x = wordlist.filter((f) => {
    return compareWord(f, guess_word) === matchCount;
  });

  console.log(x);

  return x;
}

function compareWord(word, guess_word) {
  let counter = 0;
  for (let i = 0; i < 6; i++) {
    if (word[i] === guess_word[i]) counter++;
  }

  return counter;
}
