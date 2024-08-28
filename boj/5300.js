const input = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim();

let ans = "";

for (let i = 1; i <= input; i++) {
  ans += `${i}`;
  if (i !== input) {
    ans += " ";
  }
  if (i % 6 === 0 || i == input) {
    ans += "Go!";
    if (i !== input) {
      ans += " ";
    }
  }
}

console.log(ans);
