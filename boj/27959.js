const input = require("fs").readFileSync("input.txt").toString().split(" ");

if (input[0] * 100 >= input[1]) {
  console.log("Yes");
} else {
  console.log("No");
}
