const [line1, line2] = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

const [N, T] = line1.split(" ").map(Number);
const times = line2.split(" ").map(Number);

let sum = 0;
let cnt = 0;

for (let time of times) {
  if (sum + time <= T) {
    sum += time;
    cnt++;
  } else {
    break;
  }
}

console.log(cnt);
