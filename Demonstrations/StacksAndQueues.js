// If manipulating in the middle of a data structure, it would be better to use linked list

/*
    Average to Worst case scenario O(n) for linked list because you have to go through the entire list
    Adding things at the head = O(1) for linked list
    If linked list has a tail then inserting at the end would be O(1)
*/

class Node {
    constructor(value=null, next=null){
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        this.top = new Node(value, this.top);
        return this;
    }

    pop(){
        let removedNode = this.top;
        if(this.top){
            this.top = removedNode.next;
        }
        return removedNode.value;
    }
}

//Queues

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
    }

    enqueue(value) {
        const newNode = new Node(value);

        if(this.first) {
            this.last.next = newNode;
        } else {
            this.first = newNode;
        }

        this.last = newNode;
    }

    dequeue() {
        const removedNode = this.first;
        if (this.first) {
            this.first = removedNode.next;
        }

        if(removedNode === this.last) {
            this.last = null;
        }

        return removedNode.value;
    }
}

