const [N, M, K] = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const row = Math.floor(K / M);
const col = K - row * M;
console.log(row, col);
