// Arrays store data in a sequencial manner. The arrays store more than one value
const marks = [34, 45, 66, 90, 67, 99];
console.log(marks);
const empty = [];
console.log(empty);

// insertion => adding anew element into the array ..array.pus(element) adds to the end of the array
marks.push(5); // O(1) ==> in theory
console.log(marks);

// deletion
/**
 * JavaScript implements array deletion with the .pop() method. This method removes the
last-added element of the array. This also returns the removed element.
 */

const lastMark = marks.pop(); // complexity of O(1)
console.log(lastMark);

/** Another way to remove an element from an array is with the .shift() method. This
method will remove the first element and return it.
 */
const firstElement = marks.shift();
console.log(firstElement);

/** Accessing an array at a specified index only takes O(1) because this process uses that
index to get the value directly from the address in memory
 */
const mark = marks[3];
console.log(mark);

/** Iteration is the process of accessing each of the items contained within a data structure.
There are multiple ways to iterate through an array in JavaScript. They all have a time
complexity of O(n) since the iteration is visiting n number of elements.
 */
for (const k of marks) {
  console.log(k);
}

for (let m = 0; m < marks.length; m += 1) {
  console.log(marks[m]);
}

marks.forEach((mm) => console.log(mm));

const marksSlice = marks.slice(3, 5);
console.log(marksSlice);
console.log(marks.slice(3, marks.length));
const marks2 = marks;
marks.push(98);
console.log(marks, marks2);
const marks3 = Array.from(marks); // takes O(n), where n is the size of the array
console.log(marks3);
marks.push(45);
console.log(marks, marks3);

/** .splice() takes three parameters: the beginning index, the size of things to be
removed, and the new elements to add. New elements are added at the position
specified by the first parameter. It returns the removed elements.
 */
marks.splice(2, 1, 88);
console.log(marks);
marks.splice(1, 1, 12);
console.log(marks.splice(1, 10, 12, 34, 56, 78, 46, 36));
console.log(marks.splice());
marks.concat(marks3);
console.log(marks.concat([12, 1, 2, 3, 4, 5]));
const grades = [12, 23, 56];
console.log(grades.concat([90, 80, 70, 60, 40, 50]));
const total = [...marks, ...grades];
console.log(total);
console.log(Math.max(...total), Math.min(...marks, ...grades));

const findSum = (array, weight) => {
  if (array.length < 1) return -1;
  for (let indx = 0; indx < array.length; indx += 1) {
    // console.log(indx);
    for (let k = indx + 1; k < array.length; k += 1) {
      if (array[indx] + array[k] === weight) {
        return [indx, k];
      }
    }
  }
  return -1;
};

console.log(findSum([], 0));
console.log(findSum([90, 80, 70, 60, 40, 50], 0));
console.log(findSum([90, 80, 70, 60, 40, 50], 90));
console.log(findSum([90, 80, 70, 60, 40, 20], 80));

const findSumImproved = (array, weight) => {
  // using the hashtable to store visited elements
  const hashTable = {};
  for (let k = 0; k < array.length; k += 1) {
    const currentElement = array[k];
    const difference = weight - currentElement;
    if (hashTable[currentElement] !== undefined) {
      return [k, hashTable[difference]];
    }
    hashTable[difference] = k;
  }
  console.log(hashTable, 'hashtable');
  return -1;
};

console.log(findSumImproved([90, 80, 70, 60, 40, 20], 80));
console.log(findSumImproved([90, 80, 70, 60, 40, 50], 90));

// IMPLEMENT THE ARRAY.SLICE(arr, start, end) FUNCTION FROM SCRATCH
const arraySlice = (array, startIndex, endIndex) => {
  if (!startIndex && !endIndex) return array;
  if (!endIndex) {
    endIndex = array.length;
  }
  // endIndex = array.length;
  const slicedArray = [];
  for (let i = startIndex; i < endIndex; i += 1) {
    slicedArray.push(array[i]);
  }
  return slicedArray;
};

console.log(arraySlice([90, 80, 70, 60, 40, 20]));
console.log(arraySlice([90, 80, 70, 60, 40, 20], 3));
console.log(arraySlice([90, 80, 70, 60, 40, 20], 2, 4));

// FIND THE MEDIAN OF TWO SORTED ARRAYS OF THE SAME SIZE
const medianOfArray = (array) => {
  const { length } = array;
  // Odd length
  if (length % 2 === 1) {
    return array[Math.floor(length / 2)];
  }
  if (length % 2 === 0) {
    return (array[length / 2] + array[(length / 2) - 1]) / 2;
  }
  return 'done';
};
console.log(medianOfArray([20, 30, 50, 70, 80]));
console.log(medianOfArray([1, 2, 17, 19, 30, 45, 67, 90, 99, 100]));

// FIND COMMON ELEMENTS IN K-SORTED ARRAYS
console.log('***FIND COMMON ELEMENTS IN K-SORTED ARRAYS****\n');
const commonElements = (kArray) => {
  const hashMap = {};
  let last;
  const answer = [];
  for (let array = 0; array < kArray.length; array += 1) {
    const currentArray = kArray[array];
    last = null;
    for (let i = 0; i < currentArray.length; i += 1) {
      const currentElement = currentArray[i];
      if (last !== currentElement) {
        if (!hashMap[currentElement]) {
          hashMap[currentElement] = 1;
        }
        hashMap[currentElement] += 1;
      }
      last = currentElement;
    }
  }
  for (const prop in hashMap) {
    if (hashMap[prop] === kArray.length) {
      answer.push(parseInt(prop));
    }
  }
  return answer;
};

console.log(commonElements([[1, 2, 3], [1, 2, 3, 4], [1, 2]]));
