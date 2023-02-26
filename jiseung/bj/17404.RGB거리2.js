const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');

const n = +input[0];
const costs = input.slice(1).map((elem) => elem.split(' ').map(Number));
const MAX = 100001;
let answer = MAX;
let dp = Array.from({ length: n + 1 }, () => [0, 0, 0]);

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === j) dp[0][j] = costs[0][j];
    else dp[0][j] = MAX;
  }

  for (let j = 1; j < n; j++) {
    dp[j][0] = Math.min(dp[j - 1][1], dp[j - 1][2]) + costs[j][0];
    dp[j][1] = Math.min(dp[j - 1][0], dp[j - 1][2]) + costs[j][1];
    dp[j][2] = Math.min(dp[j - 1][0], dp[j - 1][1]) + costs[j][2];
  }

  for (let j = 0; j < 3; j++) {
    if (i === j) continue;
    answer = Math.min(answer, dp[n - 1][j]);
  }
}

console.log(answer);
