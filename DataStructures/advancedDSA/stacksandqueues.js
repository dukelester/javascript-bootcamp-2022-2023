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
