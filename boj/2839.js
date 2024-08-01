const input = require("fs").readFileSync("input.txt").toString().trim();
const Num = parseInt(input);
let arr = [];
// 각 케이스에 대해서 값 계산 시도 후 left = 0이면 배열에 push

let share3 = Math.floor(Num / 3);
let share5 = Math.floor(Num / 5);

for (let i = 0; i <= share5; i++) {
  for (let j = 0; j <= share3; j++) {
    let pointer = i * 5 + j * 3;
    if (pointer > Num) break;
    if (Num === pointer) {
      arr.push(i + j);
    }
  }
}

// 배열 sort 후 최소 값 출력
if (arr[0] !== undefined) {
  arr.sort((a, b) => a - b);
  console.log(arr[0]);
} else {
  console.log(-1);
}
