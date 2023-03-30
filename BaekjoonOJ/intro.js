let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input.shift());
console.log(input)
let result = "";
// control + D : 종료

// let input = [];
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.on('line', function (line) {
//   input.push(line);
// }).on('close', function () {
//   console.log(input);
//   process.exit();
// });
// //enter -> ctrl+d