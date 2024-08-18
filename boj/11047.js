const [NK, ...coins] = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

const [N, K] = NK.split(" ").map(Number);

let cnt = 0;
let rest = K;

for (let i = N - 1; i >= 0; i--) {
  if (rest === 0) {
    break;
  }
  const coin = parseInt(coins[i]);
  if (rest >= coin) {
    cnt += Math.floor(rest / coin);
    rest = rest - Math.floor(rest / coin) * coin;
  }
}

console.log(cnt);
