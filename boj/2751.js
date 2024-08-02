const input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

const arr = input.slice(1).map(Number);
arr.sort((a, b) => a - b);

process.stdout.write(arr.join("\n"));
