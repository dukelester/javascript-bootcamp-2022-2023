// Stacks and Queues

function Stack(array) {
  this.array = [];
  if (array) {
    this.array = array;
  }
}

Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

Stack.prototype.isEmpty = function () {
  return this.array.length === 0;
};

Stack.prototype.peek = function () { // Time Complexity: O(1)
  return this.array[this.array.length - 1];
};

Stack.prototype.push = function (element) { // Time Complexity: O(1)
  return this.array.push(element);
};

Stack.prototype.pop = function () { // Time Complexity: O(1)
  return this.array.pop();
};

const nums = [34, 35, 79, 90, 32];
console.log(nums.slice());

const plateStack = new Stack(nums);
console.log(plateStack);
console.log(plateStack.isEmpty());
console.log(plateStack.getBuffer());
console.log(plateStack.peek());
plateStack.push(90);
plateStack.push(80);
console.log(plateStack.getBuffer());
console.log(plateStack.pop());

const stackSearch = (stack, element) => {
  const bufferArray = stack.getBuffer();
  const bufferStack = new Stack(bufferArray);
  while (!bufferStack.isEmpty()) {
    if (bufferStack.pop() === element) {
      return true;
    }
  }
  return false;
};

console.log(stackSearch(plateStack, 80)); // Time Complexity: O(n)
console.log(stackSearch(plateStack, 90));

// QUEUES

function Queue(array) {
  this.array = [];
  if (array) {
    this.array = array;
  }
}

// enqueuing
Queue.prototype.getBuffer = function () {
  return this.array.slice();
};

Queue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

Queue.prototype.peek = function () {
  return this.array[0];
};

Queue.prototype.enqueue = function (element) { // Time Complexity: O(1)
  return this.array.push(element);
};

Queue.prototype.dequeue = function () { // Time Complexity: O(n)
  return this.array.shift();
};

const customerCare = new Queue(nums);
console.log(customerCare);
console.log(customerCare.getBuffer());
console.log(customerCare.peek());
console.log(customerCare.isEmpty());
console.log(customerCare.enqueue(45));
console.log(customerCare.dequeue());

function queueAccessNthTopNode(queue, element) { // Time Complexity: O(n)
  const bufferArray = queue.getBuffer();
  if (element <= 0) throw new Error('Invalid element !');
  const newQueue = new Queue(bufferArray);
  if (--element !== 0) {
    newQueue.dequeue();
  }
  return newQueue.dequeue();
}

console.log(queueAccessNthTopNode(customerCare, 45));
// console.log(queueAccessNthTopNode(customerCare, -2));

const queueSearch = (queue, element) => {
  const bufferArray = queue.getBuffer();
  const bufferQueue = new Queue(bufferArray);
  while (!bufferQueue.isEmpty()) {
    if (bufferQueue.dequeue() === element) {
      return true;
    }
  }
  return false;
};

console.log(queueSearch(customerCare, 90));
console.log(queueSearch(customerCare, 990));
console.log(queueSearch(customerCare, 70));
