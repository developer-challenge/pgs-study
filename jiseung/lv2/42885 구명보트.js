// 탐욕법
function solution(people, limit) {
  let answer = 0;
  let sortedPeople = people.sort((a, b) => a - b);

  // 인덱스가 아닌 배열을 조작하면 사간 초과
  let start = 0;
  let end = sortedPeople.length - 1;

  while (start <= end) {
    if (sortedPeople[start] + sortedPeople[end] <= limit) {
      start += 1;
    }
    end -= 1;
    answer += 1;
  }

  return answer;
}
