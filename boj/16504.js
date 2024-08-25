const [N, ...nums] = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

let currentNums = nums.map((line) => line.split(" ").map(Number));
let currentN = parseInt(N);

while (currentN > 1) {
  // fold left to right
  let tempNums = [];
  for (let line of currentNums) {
    let tempLine = [];
    for (let i = 0; i < line.length / 2; i++) {
      let temp = line[i] + line[line.length - i - 1];
      tempLine.push(temp);
    }
    tempNums.push(tempLine);
  }
  currentNums = tempNums;
  //fold bottom to top
  tempNums = [];
  for (let i = 0; i < currentNums.length / 2; i++) {
    let tempLine = [];
    for (let j = 0; j < currentNums[i].length; j++) {
      let temp = currentNums[i][j] + currentNums[currentNums.length - 1 - i][j];
      tempLine.push(temp);
    }
    tempNums.push(tempLine);
  }
  currentNums = tempNums;
  currentN = currentN / 2;
}
console.log(currentNums[0][0]);
