function solution(alp, cop, problems) {
  let [alpMax, copMax] = [0, 0];

  for (const [alp_req, cop_req] of problems) {
    alpMax = alpMax > alp_req ? alpMax : alp_req;
    copMax = copMax > cop_req ? copMax : cop_req;
  }

  const dp = Array.from({ length: alpMax + 1 }, () =>
    Array.from({ length: copMax + 1 }, () => Infinity),
  );

  alp = alp < alpMax ? alp : alpMax;
  cop = cop < copMax ? cop : copMax;

  for (let a = 0; a < alp + 1; a++) {
    for (let c = 0; c < cop + 1; c++) {
      dp[a][c] = 0;
    }
  }

  for (let a = alp; a < alpMax + 1; a++) {
    for (let c = cop; c < copMax + 1; c++) {
      if (a < alpMax)
        dp[a + 1][c] =
          dp[a + 1][c] < dp[a][c] + 1 ? dp[a + 1][c] : dp[a][c] + 1;
      if (c < copMax)
        dp[a][c + 1] =
          dp[a][c + 1] < dp[a][c] + 1 ? dp[a][c + 1] : dp[a][c] + 1;

      for (const [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems) {
        if (a >= alp_req && c >= cop_req) {
          const na = alpMax < a + alp_rwd ? alpMax : a + alp_rwd;
          const nc = copMax < c + cop_rwd ? copMax : c + cop_rwd;
          dp[na][nc] =
            dp[na][nc] < dp[a][c] + cost ? dp[na][nc] : dp[a][c] + cost;
        }
      }
    }
  }

  return dp[alpMax][copMax];
}
