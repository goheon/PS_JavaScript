const input = require("fs").readFileSync("input.txt").toString().split("\n");

const students = 28;
const regular = input[0];
const small = input[1];

const leftOvers = regular * 8 + small * 3 - students;

console.log(leftOvers);
