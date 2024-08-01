/**
5
1 1
2 3
3 4
9 8
5 2 */

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input[0]; i++) {
  const [A, B] = input[i + 1].split(" ").map(Number);
  console.log(A + B);
}
