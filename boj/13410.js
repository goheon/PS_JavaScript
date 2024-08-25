const [N, K] = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let max = 0;

for (let i = 1; i <= K; i++) {
  const temp = (N * i).toString().split("").reverse().join("");
  if (parseInt(temp) > max) max = parseInt(temp);
}

console.log(max);
