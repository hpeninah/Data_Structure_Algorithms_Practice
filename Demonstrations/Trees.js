class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        // If the tree is empty, then this key being inserted is the root node of the tree.
        if (this.key == null) { //8
            this.key = key;
            this.value = value;
        }

        else if (key <= this.key) { //7<8
            if (this.left === null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            else {
                this.left.insert(key, value);
            }
        }

        else { //7>6
            if (this.right == null) { 
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }
}

// check if node is a leaf node
if (node.left && node.right) {
    // node has two children. change its value to the min
    // right value and remove the min right node
    node.value = this.findMinValue(node.right);
    node.right = this.remove(node.value, node.right);
} else {
    // replace the node with whichever child it has
    node = node.left || node.right;
}
