// Caching => the process of storing data into temporary memory so that it can be easily
// retrieved for later use if it is required again.

function LFUNode(key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
  this.freqCount = 1;
}

function LFUDoublyLinkedList() {
  this.head = new LFUNode('The LFU Head', null);
  this.tail = new LFUNode('The LFU tail', null);
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.size = 0;
}

function LFUCache(capacity) {
  this.keys = {};
  this.freq = {};
  this.capacity = capacity;
  this.size = 0;
  this.minFreq = 0;
}

LFUDoublyLinkedList.prototype.insertAtHead = function (node) {
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
  node.prev = this.head;
  this.size += 1;
};

LFUDoublyLinkedList.prototype.removeAtTail = function (node) {
  const oldTail = this.tail.prev;
  const prev = this.tail.prev;
  prev.prev.next = this.tail;
  this.tail.prev = prev.prev;
  this.size -= 1;
  return oldTail;
};

LFUDoublyLinkedList.prototype.removeNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
  this.size -= 1;
};
