function solution(k, tangerine) {
  let answer = 0;
  let current = 0;
  const map = new Map();

  for (const t of tangerine) {
    if (map.has(t)) map.set(t, map.get(t) + 1);
    else map.set(t, 1);
  }

  for (const [_, t] of [...map.entries()].sort((a, b) => b[1] - a[1])) {
    if (current < k) {
      answer++;
      current += t;
    }
  }

  return answer;
}
