const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const numbers = input[1].split(" ").map(Number);
const denominator = numbers.sort((a, b) => b - a)[0];

let sum = 0;
for (let i = 1; i < numbers.length; i++) {
  sum += (numbers[i] / denominator) * 100;
}

console.log((sum + 100) / numbers.length);
