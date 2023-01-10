// Sorting

console.log('Welcome to sorting ...');

/** Sorting is one of the most important topics in computer science; it is faster and easier
to locate items in a sorted array than in an unsorted sorted array. You can use sorting
algorithms to sort an array in memory for searching later in the program or to write to
a file for later retrieval
 */

const swap = (array, index1, index2) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

const bubbleSort = (array) => {
  for (let k = 0; k < array.length; k += 1) {
    for (let m = 0; m <= k; m += 1) {
      if (array[k] < array[m]) {
        swap(array, k, m);
      }
    }
  }
  return array;
};

const nums = [23, 78, 34, 67, 20, 12, 23, 90, 55];
const marks = [10, 67, 34, 89, 98, 78, 45, 70, 34, 67, 34, 45, 25];
console.log(bubbleSort(nums));
console.log(marks);

// Selection Sort
/** Selection sorting works by scanning the elements for the smallest element and inserting
 * it into the current position of the array. This algorithm is marginally better than bubble sort
 */
const selectionSort = (items) => {
  const { length } = items;
  let min = 0;
  for (let i = 0; i < length; i += 1) {
    min = i;
    // check the rest of the array to see if anything is smaller
    for (let j = i + 1; j < length; j += 1) {
      if (items[j] < items[min]) {
        min = j;
      }
    }
    // if the minimum isn't in the position, swap it
    if (i !== min) {
      swap(items, i, min);
    }
  }
  return items;
};

console.log(selectionSort(marks));
console.log(selectionSort(nums));

// Insertion Sort
/** Insertion sort works similarly to selection sort by searching the array sequentially and
 * moving the unsorted items into a sorted sublist on the left side of the array.
 * The outer for loop iterates over the array indices, and the inner for loop moves
 * the unsorted items into the sorted sublist on the left side of the array.
 */

const insertionSort = (items) => {
  const { length } = items;
  let value;
  let i;
  let j;
  for (i = 0; i < length; i += 1) {
    value = items[i];
    for (j = i - 1; j > -1 && j > items[j] > value; j -= 1) {
      items[j + 1] = items[j];
    }
    items[j + 1] = value;
  }
  return items;
};

console.log(insertionSort(nums));
console.log(insertionSort(marks));

// Count Sort
/**
 *  Count sort can be done in O(k+n) because it does not compare values. It works only for
    numbers and given a certain range. Instead of sorting by swapping elements, this count
    works by counting occurrences of each element in the array. Once occurrences of each
    element are counted, the new array can be created using those occurrences. This sorts
    the data without having to swap elements
 *
 */
const countSort = (items) => {
  const hashMap = {};
  const sorted = [];
  for (let k = 0; k < items.length; k += 1) {
    if (!hashMap[items[k]]) {
      hashMap[items[k]] = 1;
    }
    hashMap[items[k]] += 1;
  }
  for (const key in hashMap) {
    for (let i = 0; i < hashMap[key]; i += 1) {
      sorted.push(parseInt(key));
    }
  }
  return sorted;
};
console.log(countSort(nums));
console.log(countSort([6, 1, 23, 2, 3, 2, 1, 2, 2, 3, 3, 1, 123, 123, 4, 2, 3]));

const items = [6, 1, 23, 2, 3, 2, 1, 2, 2, 3, 3, 1, 123, 123, 4, 2, 3];
const compareNumbers = (a, b) => a - b;
console.log(items.sort(compareNumbers));
console.log(nums.sort(compareNumbers));

const squareRootNaive = (number) => {
  if (number === 0 || number === 1) {
    return number;
  }
  let index = 1;
  let square = 1;
  while (square < number) {
    if (square === number) {
      return square;
    }
    index += 1;
    square = index * index;
  }
  return index;
};
console.log(squareRootNaive(9));
console.log(squareRootNaive(99));
console.log(squareRootNaive(89));
console.log(squareRootNaive(81));

// Time Complexity: O(n)
// This is essentially a linear search since it has to linearly check one by one the value for the
// square root.

const squareRootBinary = (number) => {
  if (number === 0 || number === 1) return number;
  let start = 0;
  let end = number;
  let answer;

  while (start <= end) {
    const mid = parseInt((start + end) / 2); // Time Complexity: O(log2(n))
    if (mid * mid === number) {
      return mid;
    }
    if (mid * mid < number) {
      start = mid + 1;
      answer = mid;
    } else {
      end = mid - 1;
    }
  }
  return answer;
};

console.log(squareRootBinary(9));
console.log(squareRootBinary(90));
console.log(squareRootBinary(121));

// Find a Square Root of a Float
const squareRootOfFloat = (floatNumber) => {
  const threshold = 0.1;
  let upper = floatNumber;
  let lower = 0;
  let middle;
  while (upper - lower > threshold) {
    middle = (upper + lower) / 2;
    if (middle * middle > floatNumber) {
      upper = middle;
    } else {
      lower = middle;
    }
  }
  return middle;
};

console.log(squareRootOfFloat(78));
console.log(squareRootOfFloat(9));
console.log(squareRootOfFloat(90));

// FIND IF TWO ELEMENTS OF AN ARRAY ADD UP TO A GIVEN NUMBER

const findTwoSum = (array, sum) => {
  for (let i = 0; i < array.length; i += 1) {
    for (let k = i + 1; k < array.length; k += 1) {
      if (array[i] + array[k] === sum) {
        console.log([array[i], array[k]]);
        return true;
      }
    }
  }
  return false;
};

console.log(marks);
console.log(findTwoSum(marks, 100));
console.log(findTwoSum(marks, 90));
console.log(findTwoSum(marks, 159));

// linear time
const findTwoSumBetter = (array, sum) => {
  const visited = {};
  for (let k = 0; k < array.length; k += 1) {
    if (visited[array[k]]) {
      return true;
    }
    visited[sum - array[k]] = array[k];
  }
  return false;
};

console.log(findTwoSumBetter(marks, 100));
console.log(findTwoSumBetter(marks, 90));
console.log(findTwoSumBetter(marks, 159));

// FIND AN ELEMENT WITHIN AN ARRAY THAT APPEARS ONLY ONCE
const findOnlyOnce = (array, low, high) => {
  if (low > high) {
    return null;
  }
  if (low === high) {
    return array[low];
  }
  const midpoint = Math.floor((low + high) / 2);
  if (midpoint % 2 === 0) {
    if (array[midpoint] === array[midpoint + 1]) {
      return findOnlyOnce(array, midpoint + 1, high);
    }
    return findOnlyOnce(array, low, midpoint);
  }
  if (array[midpoint] === array[midpoint - 1]) {
    return findOnlyOnce(array, midpoint + 1, high);
  }
  return findOnlyOnce(array, low, midpoint - 1);
};

function findOnlyOnceHelper(array) {
  return findOnlyOnce(array, 0, array.length);
}

const myArr = [1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8];
const myArr2 = [1, 1, 3, 3, 4, 4, 5, 5, 7, 7, 8];
console.log(findOnlyOnceHelper(myArr));
console.log(findOnlyOnceHelper(myArr2));

// CREATE A JAVASCRIPT SORT COMPARATOR FUNCTION THAT WOULD SORT STRING BY LENGTH

function sortStringsByLength(a, b) {
  return a.length - b.length;
}
const mythical = ['dragon', 'slayer', 'magic', 'wizard of oz', 'ned stark'];
console.log(mythical.sort(sortStringsByLength));

// Sort string elements, putting strings with a first, as shown here:
const sortAFirst = (stringA, stringB) => stringA.indexOf('a') - stringB.indexOf('a');
console.log(mythical.sort(sortAFirst));

// Sort object elements by the number of properties
const myObj = [{ prop1: 'name', prop2: 'location' },
  { prop1: 'fghjk', prop2: 'fghjk', prop3: 'outyuio' },
  { prop1: 'dfghjkl', prop2: 'ertyuiop' }];

const objectSort = (objA, objB) => Object.keys(objA).length - Object.keys(objB).length;
console.log(myObj.sort(objectSort));

// IMPLEMENT A WORD COUNTER LIST
/**
 * Create a function that generates an object of words (as keys) and the number of times the
 * words occur in a string ordered by highest to lowest occurrences.
 * Here’s some example input: practice makes perfect. get perfect by practice. just practice.
 * Here’s the example output: { practice: 3, perfect: 2, makes: 1, get: 1, by: 1,just: 1 }.
 */

const sortWord = (wordA, wordB) => wordA[0] - wordB[0]; // sorting helper

const wordCount = (sentence) => {
  const wordArray = sentence.replace(/[.]/g, ' ').split(' ');
  console.log(wordArray);
  const occurrence = {};
  const answeList = {};
  for (let m = 0; m < wordArray.length; m += 1) {
    const currentWord = wordArray[m];
    if (!occurrence[currentWord]) {
      occurrence[currentWord] = 1;
    } else {
      occurrence[currentWord] += 1;
    }
  }
  const temporaryArray = [];
  for (let prop in occurrence) {
    temporaryArray.push([occurrence[prop], prop]);
  };
  temporaryArray.sort(sortWord);
  for (let i = 0; i < temporaryArray.length; i += 1) {
    const current = temporaryArray[i];
    answeList[current[i]] = current[0];
  }
  return answeList;
};
wordCount('practice makes perfect. get perfect by practice. just practice.');
console.log(wordCount('practice makes perfect. get perfect by practice. just practice.'));
