const input = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

const [b1, b2, b3, d1, d2] = input.map(Number);
const bs = [b1, b2, b3].sort((a, b) => a - b);
const ds = [d1, d2].sort((a, b) => a - b);

console.log(bs[0] + ds[0] - 50);
