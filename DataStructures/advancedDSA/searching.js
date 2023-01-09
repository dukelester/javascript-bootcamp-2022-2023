console.log('Welcome to searching...');

/**
 * Linear Search
 * A linear search works by going through each element of the array one index after another
 * sequentially. The following code example is an implementation of a linear search that
 * iterates through the entire array of numbers to find out whether 4 and 5 exist within the
 * array.
 */

const linearSearch = (arrayOfNums, element) => {
  for (let k = 0; k < arrayOfNums.length; k += 1) {
    if (arrayOfNums[k] === element) {
      return `found at position ${k}`;
    }
  }
  console.log(element, 'not found');
  return -1;
};

const nums = [34, 12, 33, 56, 34, 89, 30];
console.log(linearSearch(nums, 8));
console.log(linearSearch(nums, 56));

const linearSearchTwo = (numArray, element) => numArray.findIndex((num) => num === element);
console.log(linearSearchTwo(nums, 34));
console.log(linearSearchTwo(nums, 56));

// The Binary Search ==> Applicable for a sorted array
const binarySearch = (sortedNumsArray, element) => {
  let lastIndex = sortedNumsArray.length - 1;
  let startIndex = 0;
  while (startIndex <= lastIndex) {
    const mid = Math.floor((lastIndex + startIndex) / 2);
    if (sortedNumsArray[mid] === element) {
      return `Found at ${mid}`;
    }
    if (element > sortedNumsArray[mid]) {
      startIndex = mid;
    } else {
      lastIndex = mid;
    }
  }
  return -1;
};

const sortedNums = [12, 14, 26, 56, 78, 89, 90, 98, 99, 100, 200, 230];
console.log(binarySearch(sortedNums, 99));
console.log(binarySearch(sortedNums, 99));
console.log(binarySearch(sortedNums, 12));
