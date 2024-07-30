const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = input.split("\n")[0];
const Numbers = input.split("\n")[1].split(" ");
const Target = input.split("\n")[2];

let count = 0;

for (let i = 0; i < N; i++) {
  if (Numbers[i] === Target) {
    count++;
  }
}

console.log(count);
