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

console.log(arr);
const result = [];
for (const num of Nums) {
  let left = 0;
  let right = arr.length - 1;
  let count = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid][0] === num) {
      count = arr[mid][1];
      break;
    } else if (arr[mid][0] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  result.push(count);
}

console.log(result);
