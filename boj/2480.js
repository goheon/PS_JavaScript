const input = require("fs").readFileSync("input.txt").toString().split(" ");

let nums = input.map(Number);
if (nums[0] === nums[1] && nums[1] === nums[2] && nums[0] === nums[2]) {
  console.log(10000 + nums[0] * 1000);
} else if (nums[0] === nums[1] || nums[0] === nums[2]) {
  console.log(1000 + nums[0] * 100);
} else if (nums[1] === nums[2]) {
  console.log(1000 + nums[1] * 100);
} else {
  console.log(nums.sort().pop() * 100);
}
