function solution(queue1, queue2) {
  const MAX = queue1.length * 3;

  let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
  let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
  const half = (sum1 + sum2) / 2;

  const queue = [...queue1, ...queue2];

  let lp = 0;
  let rp = queue1.length;

  for (let i = 0; i < MAX; i++) {
    if (sum1 === half) return i;

    if (sum1 > half) {
      sum1 -= queue[lp++];
    } else {
      sum1 += queue[rp++];
    }
  }

  return -1;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
