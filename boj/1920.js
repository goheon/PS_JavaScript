const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const arrN = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const arrM = input[3].split(" ").map(Number);

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};

const result = [];
for (let i = 0; i < arrM.length; i++) {
  result.push(binarySearch(arrN, arrM[i]) ? 1 : 0);
}

console.log(result.join("\n"));
