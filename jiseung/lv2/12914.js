function solution(n) {
  const fib = [1, 2];
  for (let i = 2; i < n; i++) {
    fib[i] = (fib[i - 1] + fib[i - 2]) % 1234567;
  }

  return fib[n - 1];
}
