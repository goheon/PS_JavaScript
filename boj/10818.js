const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
console.log(arr[0] + " " + arr[input[0] - 1]);
