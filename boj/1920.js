const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const arrN = input[1].split(" ");
const arrM = input[3].split(" ");

for (let i = 0; i < arrM.length; i++) {
  if (arrN.includes(arrM[i])) {
    console.log(1);
  } else {
    console.log(0);
  }
}
