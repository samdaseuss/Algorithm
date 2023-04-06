// ARRAY IMPLEMENTATION
// #1 push & pop : adding to the end removing from the end
let stack1 = [];
stack1.push("elehpant");
stack1.push("dog");
stack1.push("cat");
stack1.push("monkey"); // LIFO
console.log(stack1);
stack1.pop();
console.log(stack1);

// #2 unshift & shift : adding and removing from the beginning
let stack2 = [];
stack2.unshift("creat new file");
stack2.unshift("resized file");
stack2.unshift("clone out wrinkle"); // LIFO
console.log(stack2);
stack2.shift();
console.log(stack2);

// LIST IMPLEMENTATION
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) this.last = null;
        this.first = this.first.next;
        this.size--;
        return temp.val;

    }
}

let stack = new Stack();
stack.push("FIRST");
stack.push("SECOND");
stack.push("THIRD");
stack.pop();
stack.pop();
console.log(stack);
