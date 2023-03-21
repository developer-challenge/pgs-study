function solution(n, costs) {
  let answer = 0;
  costs.sort((a, b) => a[2] - b[2]); // 가중치를 오름차순으로 정렬

  const parent = Array.from({ length: n }, (_, i) => i); // 자기 자신이 부모이도록 초기화

  const getParent = (parent, c) => {
    if (parent[c] === c) return c;
    return (parent[c] = getParent(parent, parent[c]));
  };

  for (const [node1, node2, cost] of costs) {
    // 정렬 순서대로 간선 선택
    const [src, dest] = [node1, node2].sort((a, b) => b - a);

    if (getParent(parent, src) === getParent(parent, dest))
      // 사이클 확인
      continue;

    // src의 부모를 dest의 부모로 설정해서 src와 dest가 같은 집합에 있도록 설정
    parent[getParent(parent, src)] = getParent(parent, dest);

    answer += cost;
  }

  return answer;
}
