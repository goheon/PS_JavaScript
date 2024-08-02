const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const nums = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let diff = M;
let max;
for (let i = 0; i < N - 2; i++) {
  const x = nums[i];
  for (let j = i + 1; j < N - 1; j++) {
    const y = nums[j];
    for (let k = j + 1; k < N; k++) {
      const z = nums[k];
      let sum = x + y + z;
      let diff2 = M - sum;
      if (sum <= M && diff2 <= diff) {
        max = sum;
        diff = diff2;
      }
    }
  }
}
console.log(max);
