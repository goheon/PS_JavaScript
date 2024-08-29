const input = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

let ans = [];
for (let i = 0; i < input.length - 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  const diff = Math.abs(a - b);
  if (a > b) {
    ans.push(b - diff);
  } else {
    ans.push(a - diff);
  }
}
console.log(ans.join("\n"));
