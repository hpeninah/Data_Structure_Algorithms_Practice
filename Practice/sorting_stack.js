// Problem: Sort a stack containing a series of numbers. The only additional
// storage you can use is a second stack.

class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class Stack {
    constructor(items = []) {
      this.top = null;
      items.forEach((item) => this.push(item));
    }
  
    push(value) {
      this.top = new Node(value, this.top);
      return this;
    }
  
    pop() {
      const popped = this.top;
      this.top = popped.next;
      return popped.value;
    }
    peek() {
        return this.top.value;
    }
    isEmpty() {
        return this.top === null;
    }
  }
  
  function sortStack(stackA) {
    //create a sorted stack
    //while input stack not empty
        //pop an element and assign it to a variable
        //while sortedStack not empty && sortedStack.top > tmp, pop from sortedStack and push to input stack
        //push tmp to sortedStack
    //return sorted
    console.log(stackA)
    let sorted = new Stack();
    while (!stackA.isEmpty()) {
      const tmp = stackA.pop();
      while (sorted.top !== null && tmp < sorted.peek()) {
        stackA.push(sorted.pop());
      }
      sorted.push(tmp);
    }
    return sorted;

  }
  
console.log(JSON.stringify(sortStack(new Stack([4, 2, 3, 7, 9])))); // 2 3 4 7 9

//   let myStack = new Stack()
//   myStack.push(4)
//   myStack.push(2)
//   myStack.push(3)
//   myStack.push(7)
//   myStack.push(9)

//   //console.log(JSON.stringify(myStack))

//   console.log(JSON.stringify(sortStack(myStack)))