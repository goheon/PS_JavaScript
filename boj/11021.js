const input = require("fs").readFileSync("input.txt").toString().split("\n");

for (i = 0; i < input[0]; i++) {
  let [num1, num2] = input[i + 1].split(" ");
  console.log(`Case #${i + 1}: ${parseInt(num1) + parseInt(num2)}`);
}
