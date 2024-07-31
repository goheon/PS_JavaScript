const input = require("fs").readFileSync("input.txt").toString().split("\n");

for (let i = 0; i < input[0]; i++) {
  [A, B] = input[i + 1].split(" ").map(Number);
  console.log(A + B);
}
