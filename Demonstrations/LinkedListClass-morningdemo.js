/* Node is used to store values in a LinkedList */

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;    
    }
}

/* linkedList class holds a reference to the `head` node. */

class LinkedList {
    constructor(){
        this.head = null;
    }

    // Tauhida --> Hannah
    insertAtHead(value) {
        this.head = new Node(value, this.head);
        return this;
    }

/* A->B->S->T 
    initialize a counter
    start at the head
    cannot use a for loop because there is no stopping condition
    iterate through list and count


*/
    get length() {
        let count = 0;
        let tempNode = this.head // A
        while(tempNode) {
            //do something
            count++
            tempNode = tempNode.next; // null
        }
        return count;
    }

/* A-B-S-T find S
// start at the head
iterate through the list
if()
*/
    find(isMatch){
        let tempNode = this.head;
        while(tempNode) {
            if(isMatch(tempNode, this)) { // if(isMatch.value === tempNode.value)
                return tempNode;
            }
            tempNode = tempNode.next
        }
        return null;
    }

/* A-B-S-T insert C after B
*/

    findPrevious(isMatch) {
        let tempNode = this.head; //A
        let previousNode = this.head; //A

        while(tempNode){
            if(isMatch(tempNode), this) {
                return [tempNode, previousNode]
            }
            previousNode = tempNode;
            tempNode = tempNode.next;
        }
        return [null, null];
    }

    insert(value, isMatch = (node, index) => index === this.length -1){
        //if list is empty
        if(!this.head){
            this.insertAtHead(value);
        } else {
            // if previous is not found
                //error
                //insert at head
                //insert at end
        const previousNode = this.findPrevious(isMatch); // B -> S but insert C in between (node) => node.value === S -> B
        previousNode.next = new Node(value, previousNode.next); // C->S then B->S
        }
    }

}


module.exports = LinkedList;

function main() {
    // // Tauhida --> Hannah
    // let myNode = new Node('Hannah');
    // let anotherNode = new Node('Tauhida', myNode);


    // console.log(myNode);
    // console.log(anotherNode);

    let myLinkedList = new LinkedList();
    myLinkedList.insertAtHead('Hannah');
    myLinkedList.insertAtHead('Tauhida');
    myLinkedList.insertAtHead('Dustin');
    myLinkedList.insertAtHead('Jacob');

    //console.log(myLinkedList.length); //4
    console.log(JSON.stringify(myLinkedList));

    //console.log(myLinkedList.find((node) => node.value === 'Dustin');
    console.log(myLinkedList.findPrevious((node) => node.value === 'Dustin'));
}

main();