// The Heap data structure
/**
 * A heap is an important data structure that returns the highest or lowest element in O(1) time.
 *
 */

// eslint-disable-next-line max-classes-per-file
class Heap {
  constructor() {
    this.items = [];
  }

  swap(index1, index2) {
    const temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex (index) {
    return (index * 2) + 1;
  }

  rightChildIndex(index) {
    return (index * 2) + 2;
  }

  parent(index) {
    return this.items[this.parentIndex(index)];
  }

  leftChild(index) {
    return this.items[this.leftChildIndex(index)];
  }

  rightChild(index) {
    return this.items[this.rightChildIndex(index)];
  }

  peek() {
    return this.items[0];
  }

  size() {
    return this.items.length;
  }
}

class MinHeap extends Heap {
  constructor() {
    super();
    this.items = [];
  }

  bubbleDown() {
    let index = 0;
    while (this.leftChild(index) && this.rightChild(index) < this.items[index]) {
      let smallerIndex = this.leftChildIndex(index);
      if (this.rightChild(index) && this.rightChild(index) < this.items[smallerIndex]) {
        smallerIndex = this.rightChildIndex(index);
      }
      this.swap(smallerIndex, index);
      index = smallerIndex;
    }
  }

  bubbleUp() {
    let index = this.items.length - 1;
    while (this.parent(index) && this.parent(index) > this.items[index]) {
      this.swap(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  }

  // radd a new element (node)
  add(item) {
    this.items[this.items.length] = item;
    this.bubbleUp();
  }

  // remove an element
  poll() {
    const item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
  }
}

const myHeap = new Heap();
console.log(myHeap);
const myMinHeap = new MinHeap();
myMinHeap.add(89);
myMinHeap.add(34);
myMinHeap.add(45);
myMinHeap.add(23);
myMinHeap.add(67);
myMinHeap.add(80);

console.log(myMinHeap);
const removed = myMinHeap.poll();
console.log('removed', removed);
console.log(myMinHeap, myMinHeap.size());
