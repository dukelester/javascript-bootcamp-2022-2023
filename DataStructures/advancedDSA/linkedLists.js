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

console.log('***** The Doubly Linked List ******\n');
// Doubly Linked list

function DoublyLinkedListNode(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

DoublyLinkedList.prototype.isEmpty = function () {
  return this.size === 0;
};

DoublyLinkedList.prototype.insertFront = function (value) { // Time Complexity: O(1)
  if (this.head === null) {
    const newNode = new DoublyLinkedListNode(value);
    this.head = newNode;
    this.tail = this.head;
  } else {
    const newNode = new DoublyLinkedListNode(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }
  this.size += 1;
};

DoublyLinkedList.prototype.insertAtTail = function (value) { // Time Complexity: O(1)
  if (this.tail === null) {
    const newTail = new DoublyLinkedListNode(value);
    this.tail = newTail;
    this.head = this.tail;
  } else {
    const newTail = new DoublyLinkedListNode(value);
    newTail.prev = this.tail;
    this.tail.next = newTail;
    this.tail = newTail;
  }
  this.size += 1;
};

DoublyLinkedList.prototype.deleteAtHead = function () {
  let toReturn;
  if (this.head !== null) {
    toReturn = this.head.data;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size -= 1;
  }
  return toReturn;
};

DoublyLinkedList.prototype.deleteAtTail = function () {
  let toReturn;
  if (this.tail !== null) {
    toReturn = this.tail.data;
    if (this.tail === this.head) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size -= 1;
  }
  return toReturn;
};

DoublyLinkedList.prototype.findStartingHead = function (value) {
  let currentNode = this.head;
  while (currentNode.next) {
    if (currentNode.data === value) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
};

DoublyLinkedList.prototype.findStartingTail = function (value) {
  let currentTail = this.tail;
  while (currentTail.prev) {
    if (currentTail.data === value) {
      return true;
    }
    currentTail = currentTail.prev;
  }
  return false;
};

const testNode = new DoublyLinkedListNode(78);
console.log(testNode);
const doublyList = new DoublyLinkedList();
console.log(doublyList);
console.log(doublyList.isEmpty());
doublyList.insertFront(90);
doublyList.insertFront(89);
doublyList.insertFront(45);
doublyList.insertFront(23);
console.log(doublyList);
doublyList.insertAtTail(60);
doublyList.insertAtTail(12);
console.log(doublyList);
console.log(doublyList.deleteAtHead()); // Time Complexity: O(1)
console.log(doublyList.deleteAtTail()); // Time Complexity: O(1)
console.log(doublyList.findStartingHead(78));
console.log(doublyList.findStartingHead(90)); // Time Complexity: O(n)
console.log(doublyList.findStartingTail(78));
console.log(doublyList.findStartingTail(90)); // Time Complexity: O(n)
