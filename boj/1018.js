const [Nums, ...Lines] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

// M: 가로 길이, N: 세로 길이
const [N, M] = Nums.split(" ").map(Number);
// 2차원 배열로 저장 후 탐색
let Board = [];
for (let i = 0; i < Lines.length; i++) {
  Board.push(Lines[i].split(""));
}
// 8 X 8 탐색
//checker
const checker = (x, y, char) => {
  let cursor = char;
  let cnt = 0;

  for (let i = x; i < x + 8; i++) {
    if (i > x) {
      if (cursor === "W") {
        cursor = "B";
      } else {
        cursor = "W";
      }
    }
    for (let j = y; j < y + 8; j++) {
      if (cursor === "W" && Board[i][j] === "W") {
        cursor = "B";
        continue;
      } else if (cursor === "B" && Board[i][j] === "B") {
        cursor = "W";
        continue;
      } else {
        if (cursor === "W") {
          cursor = "B";
        } else {
          cursor = "W";
        }
        cnt++;
      }
    }
  }
  return cnt;
};
// checker 함수로 처리 후 배열에 저장
let result = [];
for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    result.push(checker(i, j, "W"));
    result.push(checker(i, j, "B"));
  }
}

console.log(result.sort((a, b) => a - b)[0]);
