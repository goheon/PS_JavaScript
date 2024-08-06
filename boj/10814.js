const [N, ...Users] = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

let formatedUsers = Users.map((userStr) => {
  const [Age, Name] = userStr.split(" ");
  return { Age: parseInt(Age), Name };
});

const sortedUsers = formatedUsers.sort((a, b) => {
  if (a.Age < b.Age) {
    return -1;
  } else if (a.Age === b.Age && a.Name < b.Name) {
    return 1;
  }
});

let result = [];
for (const user of sortedUsers) {
  result.push(`${user.Age} ${user.Name}`);
}

console.log(result.join("\n"));
