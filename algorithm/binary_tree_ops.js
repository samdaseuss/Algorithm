class BinaryTreeNode {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTreeOps {
    static inOrder(root) {
        let results = "";
        traverse(root);
        return results;

        function traverse(root) {
            if(!root) {
                return;
            }
            traverse(root.left);
            results += `${root.value} `;
            traverse(root.right);
        }
    }

    static preOrder(root) {
        let results = "";
        traverse(root);
        return results;

        function traverse(root) {
            if(!root) {
                return;
            }
            results += `${root.value} `;
            traverse(root.left);
            traverse(root.right);
        }
    }

    static postOrder(root) {
        let results = "";
        traverse(root);
        return results;

        function traverse(root) {
            if(!root) {
                return;
            }
            traverse(root.left);
            traverse(root.right);
            results += `${root.value} `;
        }
    }
}

let testTree = new BinaryTreeNode(
    4,
    new BinaryTreeNode(6, new BinaryTreeNode(2), new BinaryTreeNode(1)),
    new BinaryTreeNode(3)
);
const result1 = BinaryTreeOps.preOrder(testTree);
const result2 = BinaryTreeOps.inOrder(testTree);
const result3 = BinaryTreeOps.postOrder(testTree);
console.log(result1);
console.log(result2);
console.log(result3)