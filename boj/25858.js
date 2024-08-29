const [ND, ...eachSolved] = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

const sum = eachSolved.reduce((a, b) => parseInt(a) + parseInt(b), 0);
const [N, D] = ND.split(" ").map(Number);

const prizePerEach = D / sum;
const prize = eachSolved.map((solved) => prizePerEach * solved);

console.log(prize.join("\n"));
