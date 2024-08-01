const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input.map(Number).sort((a, b) => b - a);
console.log(arr[0]);
console.log(input.indexOf(String(arr[0])) + 1);
