const input = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

let line = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let sum = 0;
let result = 0;
for (num of line) {
  sum = sum + num;
  result += sum;
}

console.log(result);
