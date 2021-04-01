// Problem: Given an linked list containing sorted numbers, insert a new
// number in the correct position

// test case : 
// let l = new LinkedList([1, 3, 5, 6, 7, 9]); // initial linked list
// l.insertSorted(8);
// l.show(); // 1, 3, 5, 6, 7, 8, 9 //function that shows the linked list

class Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor(items) {
      this.head = null;
      items.forEach((item) => this.insert(item));
  
    }
  
    insert(item) {
      if (this.head === null) {
        this.head = new Node(item, null);
        return;
      }
      let node = this.head;
      while (node.next !== null) {
        node = node.next;
      }
      node.next = new Node(item, null);
    }
  
    show() {
      let node = this.head;
      while (node !== null) {
        process.stdout.write(`${node.value}, `);
        node = node.next;
      }
      process.stdout.write("\n");
    }
  
    //10->12-> 20->30
    insertSorted(value) {
        //edge cases
        //list is empty
        if(this.head === null || value < this.head.value){
            this.head = new Node(value, this.head)
        }

        let node = this.head;
        while(node.next && node.next.value < value) {
            node = node.next;
        }
        node.next = new Node(value, node.next);
    }
  
  }
  
  let l = new LinkedList([1, 3, 5, 6, 7, 9]);
  l.insertSorted(8);
  l.show(); // 1, 3, 5, 6, 7, 8, 9