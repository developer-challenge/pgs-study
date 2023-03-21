function solution(number, k) {
  let answer = [+number[0]];

  for (let j = 1; j < number.length; j++) {
    while (k > 0 && +number[j] > answer.at(-1)) {
      answer.pop();
      k -= 1;
    }
    answer.push(+number[j]);
  }

  return answer.slice(0, number.length - k).join('');
}
