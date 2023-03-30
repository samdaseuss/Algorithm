let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

class BinaryTreeOps {
  static preOrder(value) {
    if(value === ".") return;
    const [left, right] = tree[value];
    results += value;
    this.preOrder(left);
    this.preOrder(right);
  }
  static inOrder(value) {
    if(value === ".") return;
    const [left, right] = tree[value];
    this.inOrder(left);
    results += value;
    this.inOrder(right);
  }
  static postOrder(value) {
    if(value === ".") return;
    const [left, right] = tree[value];
    this.postOrder(left);
    this.postOrder(right);
    results += value;
  }
}

let tree = {};
let results = "";
input.forEach((v,i) => {
  const [ value, left, right ] = v.split(" ");
  tree[value] = [left, right];
});

BinaryTreeOps.preOrder("A");
results += "\n";
BinaryTreeOps.inOrder("A");
results += "\n";
BinaryTreeOps.postOrder("A");
console.log(results);