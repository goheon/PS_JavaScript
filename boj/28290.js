const input = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim();

let result = "";

switch (input) {
  case "asdfjkl;":
    result = "stairs";
    break;
  case "asdf;lkj":
  case ";lkjasdf":
    result = "out-in";
    break;
  case ";lkjfdsa":
    result = "reverse";
    break;
  case "fdsajkl;":
  case "jkl;fdsa":
    result = "in-out";
    break;
  default:
    result = "molu";
}
console.log(result);
