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
