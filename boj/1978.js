const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .split("\n")[1]
  .split(" ")
  .map(Number);

let cnt = 0;

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

input.forEach((num) => {
  if (isPrime(num)) {
    cnt++;
  }
});

console.log(cnt);
