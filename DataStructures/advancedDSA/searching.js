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
