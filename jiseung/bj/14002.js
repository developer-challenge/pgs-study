const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const [N, input] = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n');

const A = input.split(' ').map(Number);

const DP = Array.from({ length: N }, () => 1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[j] < A[i]) {
      DP[i] = Math.max(DP[i], DP[j] + 1);
    }
  }
}

let LIS = Math.max(...DP);
let LIS_Array = [];

for (let i = N - 1; i >= 0; i--) {
  if (DP[i] === LIS) {
    LIS_Array.unshift(A[i]);
    LIS--;
  }
}

console.log(LIS_Array.length);
console.log(LIS_Array.join(' '));
