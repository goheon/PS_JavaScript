const [N, Cards, M, Nums] = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

const sortedCards = Cards.split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let arr = [];

for (i in sortedCards) {
  if (sortedCards[i] === sortedCards[i - 1]) {
    continue;
  }
  let temp = sortedCards[i];
  let cnt = 1;
  let j = parseInt(i);
  while (true) {
    j += 1;
    if (sortedCards[j] === temp) {
      cnt++;
    } else {
      break;
    }
  }
  arr.push([temp, cnt]);
}

const nNums = Nums.split(" ").map(Number);
let result = [];

for (let i = 0; i < M; i++) {
  let left = 0;
  let right = arr.length - 1;
  let target = nNums[i];
  let flag = false;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid][0] == target) {
      result.push(arr[mid][1]);
      flag = true;
      break;
    } else if (arr[mid][0] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (!flag) {
    result.push(0);
  }
}

console.log(result.join(" "));
