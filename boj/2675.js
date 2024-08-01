const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < Number(input[0]); i++) {
  const [R, S] = input[i + 1].split(" ");
  let P = "";
  for (let j = 0; j < S.length; j++) {
    P = P + S[j].repeat(R);
  }
  console.log(P);
}
