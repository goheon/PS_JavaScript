const [N, ...lines] = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

let ans = [];

for (let str of lines) {
  if (str[str.length - 1] !== ".") str += ".";
  ans.push(str);
}

console.log(ans.join("\n"));
