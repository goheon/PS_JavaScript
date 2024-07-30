const input = require("fs").readFileSync("/dev/stdin").toString();
const prize = Number(input);

const fullTax = (prize * (100 - 22)) / 100;
const decTax = prize - ((prize * (100 - 80)) / 100) * 0.22;

console.log(fullTax, decTax);
