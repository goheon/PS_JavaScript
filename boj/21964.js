const [N, S] = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

console.log(S.slice(S.length - 5));
