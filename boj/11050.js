const [N, K] = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let result = 1;
for (let i = N; i > N - K; i--) {
  result = result * i;
}

for (let i = K; i > 0; i--) {
  result = result / i;
}

console.log(result);
