// The Linked List ==>

function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}

const node = new SinglyLinkedListNode(89);
console.log(node);

// function SinglyLinkedList() {
//   this.head = null;
//   this.size = 0;
// }

// SinglyLinkedList.prototype.isEmpty = function () {
//   return this.size === 0;
// };

class LinkedListClass {
  constructor() {
    this.head = null; // The start of the linked list is referred to as the head.
    // This property defaults to null before inserting any element into the linked list.
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  insert(value) {
    if (this.head === null) {
      this.head = new SinglyLinkedListNode(value);
    } else {
      const temp = this.head; // store the current head
      this.head = new SinglyLinkedListNode(value); // create a new head
      this.head.next = temp; // point the new head to the nex => temp
    }
    this.size += 1;
  }

  removeNode(value) {
    // Time Complexity: O(n) In the worst case, the entire linked list must be traversed.
    let currentHead = this.head;
    if (currentHead.data === value) {
      this.head = currentHead.next;
      this.size -= 1;
    } else {
      let previous = currentHead;
      while (currentHead.next) {
        if (currentHead.data === value) {
          previous.next = currentHead.next;
          previous = currentHead;
          currentHead = currentHead.next;
          break;
        }
        previous = currentHead;
        currentHead = currentHead.next;
      }
      if (currentHead.data === value) {
        currentHead.next = null;
      }
      this.size -= 1;
    }
  }

  search(value) { // Time Complexity: O(n)
    if (!this.isEmpty()) {
      let head = this.head;
      while (head.next) {
        if (head.data === value) {
          return true;
        }
        head = head.next;
      }
    }
    return false;
  }
}
// Time Complexity: O(1) This is a constant time operation; no loops or traversal is required.

const list = new LinkedListClass();
console.log(list.isEmpty());
list.insert(90);
list.insert(80);
list.insert(45);
list.insert(78);
console.log(list.size, list.isEmpty());
list.removeNode(90);
list.removeNode(78);
console.log(list.size, list);

console.log(list.search(89));
console.log(list.search(90));
console.log(list.search(45));
