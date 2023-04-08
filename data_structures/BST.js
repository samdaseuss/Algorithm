class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

    find(value) {
        if (this.root === null) return false;
        let current = this.root, found = false;
        while (current && !found) {
            if (value < current.value) current = current.left;
            else if (value > current.value) current = current.right;
            else found = true;
        }
        if (!found) return undefined;
        return current;
    }
    
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found) {
            if(value < current.value) current = current.left;
            else if(value > current.value) current = current.right;
            else return true;
        }
        return false;
    }

    BFS() {
        let data = [], queue = [], node = this.root;
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder() {
        let data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFSInOrder() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left); // node.left && traverse(node.left)
            data.push(node.value);
            if (node.right) traverse(node.right); // node.right && traverse(node.right)
        }
        traverse(this.root);
        return data;
    }

    DFSPostOrder() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
}

//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
console.log(tree)
console.log(tree.find(5))
console.log(tree.contains(5))
console.log(tree.BFS())
console.log(tree.DFSPreOrder())
console.log(tree.DFSInOrder())
console.log(tree.DFSPostOrder())