const input = require("fs").readFileSync("input.txt").toString().split(" ");
const monsterDefense = Number(input[0]);
const userIgnoreRate = Number(input[1]);
if (monsterDefense - (monsterDefense * userIgnoreRate) / 100 >= 100) {
  console.log(0);
} else {
  console.log(1);
}
