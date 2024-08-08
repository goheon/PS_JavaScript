const input = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let result = [];
for (let i = 1; i < input.length; i++) {
  const n = input[i];

  if (n < 2) {
    result.push("#");
    continue;
  }

  let temp = "";
  temp = temp + "#".repeat(n) + "\n";
  for (let j = 0; j < n - 2; j++) {
    temp = temp + `#${"J".repeat(n - 2)}#` + "\n";
  }
  temp = temp + "#".repeat(n);

  result.push(temp);
}

console.log(result.join("\n\n"));
