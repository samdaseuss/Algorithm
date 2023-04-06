// ARRAY IMPLEMENTATION
// #1 push & shift : adding to the end removing from the beginning
let stack1 = [];
stack1.push("elehpant");
stack1.push("dog");
stack1.push("cat");
stack1.push("monkey"); // LIFO
console.log(stack1);
stack1.shift();
stack1.shift();
console.log(stack1);

// #2 unshift & pop
let stack2 = [];
stack2.unshift("elehpant");
stack2.unshift("dog");
stack2.unshift("monkey");
console.log(stack2);
stack2.pop();
stack2.pop();
console.log(stack2);

// A Queue Class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    
    enqueue(value) {
        let newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last) this.last  = null;
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let queue = new Queue();
queue.enqueue("c");
queue.enqueue("u");
queue.enqueue("p");
console.log(queue);
queue.dequeue();
console.log(queue);