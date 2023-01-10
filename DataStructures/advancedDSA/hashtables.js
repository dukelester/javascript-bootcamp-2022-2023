// The hash tables
/**
 * A hash table is a fixed-sized data structure in which the size is defined at the start
 * Hash tables are excellent for quick storage and retrieval of data based on key-value pairs.
 * A hash table contains two main functions: put() and get(). put() is used for storing
 * data into the hash table, while get() is used for retrieving data from the hash table. Both
 * of these functions have a time complexity of O(1).
 */

function HashTable(size) {
  this.size = size;
  this.keys = this.initArray(size);
  this.values = this.initArray(size);
  this.limit = 0;
}

HashTable.prototype.put = function (key, value) {
  if (this.limit >= this.size) {
    throw new Error('Hash table is full');
  }
  let hashIndex = this.hash(key);
  // Linear probing
  while (this.keys[hashIndex] !== null) {
    hashIndex += 1;
    hashIndex %= this.size;
  }
  this.keys[hashIndex] = key;
  this.values[hashIndex] = value;
  this.limit += 1;
};

HashTable.prototype.get = function (key) {
  let hashIndex = this.hash(key);
  while (this.keys[hashIndex] !== key) {
    hashIndex += 1;
    hashIndex %= this.size;
  }
  return this.values[hashIndex];
};

HashTable.prototype.hash = function (key) {
  if (!Number.isInteger(key)) throw new Error(' The key must be integer');
  return key % this.size;
};

HashTable.prototype.initArray = function (size) {
  const array = [];
  for (let i = 0; i < size; i += 1) {
    array.push(null);
  }
  return array;
};

const exampleTable = new HashTable(13);
exampleTable.put(7, 'hi');
exampleTable.put(20, 'hello');
exampleTable.put(33, 'sunny');
exampleTable.put(46, 'weather');
exampleTable.put(59, 'wow');
exampleTable.put(72, 'forty');
exampleTable.put(85, 'happy');
exampleTable.put(98, 'sad');
console.log(exampleTable);
// console.log(exampleTable.get(78));
