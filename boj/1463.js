const input = require("fs").readFileSync("input.txt", "utf-8").toString();
const n = Number(input);

// dp 배열 초기화
// 인덱스 1부터 시작하기 위해 n+1
// [0, 0, 0, 0, 0]
let dp = Array(n + 1).fill(0);

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
}
console.log(dp[n]);
