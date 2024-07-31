const input = require("fs").readFileSync("input.txt").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  if (input[i].trim() === "") continue;
  const [N, M] = input[i].split(" ");
  const numN = parseInt(N);
  const numM = parseInt(M);
  console.log(Math.floor(numM / (numN + 1)));
}
