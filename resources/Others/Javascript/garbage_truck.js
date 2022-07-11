function solution(D, T) {
  const n = D.length;
  let plasticCount = 0;
  let glassCount = 0;
  let metalCount = 0;
  for (let i = n - 1; i >= 0; i--) {
    const bagsToCollect = T[i].split("").reduce(
      (acc, char) => {
        if (!acc[char]) acc[char] = 0;
        acc[char]++;
        return acc;
      },
      { P: 0, G: 0, M: 0 }
    );

    if (bagsToCollect["P"] || plasticCount > 0) {
      plasticCount += D[i] * 2 + bagsToCollect["P"];
    }
    if (bagsToCollect["G"] || glassCount > 0) {
      glassCount += D[i] * 2 + bagsToCollect["G"];
    }
    if (bagsToCollect["M"] || metalCount > 0) {
      metalCount += D[i] * 2 + bagsToCollect["M"];
    }
  }

  return Math.max(plasticCount, glassCount, metalCount);
}

// solution([3, 2, 4], ["MPM", "", "G"]);
// solution([2, 5], ["PGP", "M"]);
solution([2, 1, 1, 1, 2], ["", "PP", "PP", "GM", ""]);
