import fs from "fs";
const input = fs.readFileSync("./dev/11720.txt").toString().split("\n");

const n = Number(input[0]);
const string = input[1];

let answer = 0;
for (let x of string) {
  answer += Number(x);
}

console.log(answer);
