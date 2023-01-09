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
  const length = items.length;
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
