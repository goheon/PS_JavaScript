// 24 18
const [A, B] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function findGCD(A, B) {
  while (B !== 0) {
    let temp = B;
    B = A % B;
    A = temp;
  }
  return A;
}

const gcd = findGCD(A, B);
console.log(gcd + "\n" + (A * B) / gcd);
