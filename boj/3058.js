const [T, ...lines] = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

let ans = [];

for (let i = 0; i < T; i++) {
  const nums = lines[i].split(" ").map(Number);
  let sum = 0;
  let evens = [];
  for (n of nums) {
    if (n % 2 === 0) {
      sum += n;
      evens.push(n);
    }
  }
  const min = Math.min(...evens);
  ans.push(`${sum} ${min}`);
}

console.log(ans.join("\n"));
