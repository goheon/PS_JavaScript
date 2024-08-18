const input = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let nums = input[i].split(" ").map(Number);
  let cnt = 0;
  while (
    nums[0] !== nums[1] ||
    nums[1] !== nums[2] ||
    nums[2] !== nums[3] ||
    nums[3] !== nums[0]
  ) {
    const a = Math.abs(nums[0] - nums[1]);
    const b = Math.abs(nums[1] - nums[2]);
    const c = Math.abs(nums[2] - nums[3]);
    const d = Math.abs(nums[3] - nums[0]);
    nums = [a, b, c, d];
    cnt++;
  }
  console.log(cnt);
}
