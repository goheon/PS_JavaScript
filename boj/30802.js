const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0];
const Sizes = input[1].split(" ").map(Number);
const [T, P] = input[2].split(" ");
let cntT = 0;

for (let i = 0; i < Sizes.length; i++) {
  if (Sizes[i] <= T) {
    if (Sizes[i] === 0) continue;
    cntT++;
  } else {
    cntT += Math.ceil(Sizes[i] / T);
  }
}
console.log(cntT);
console.log(Math.floor(N / P), N % P);
