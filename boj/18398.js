const input = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

let ans = [];

for (line of input) {
  const nums = line.split(" ").map(Number);
  if (nums.length > 1) {
    ans.push(`${nums[0] + nums[1]} ${nums[0] * nums[1]}`);
  }
}

console.log(ans.join("\n"));
