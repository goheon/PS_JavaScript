const input = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim();

let ans = 1;
for (let i = 1; i <= input; i++) {
  ans = ans * i;
}
console.log(ans);
