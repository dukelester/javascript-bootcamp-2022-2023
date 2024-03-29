// SETS
/**
 * a group of nordered unique (no duplicate) elements.
 * The set is a powerful data structure for performing uniqueness checks.
 */
const exampleSet = new Set();
// insertion
exampleSet.add(56);
exampleSet.add(66);
exampleSet.add(96);
exampleSet.add(90); // complexity of Order 1 => O(1)
exampleSet.add(90); // ignored => duplicates

console.log(exampleSet, exampleSet.size);

// delete elements => Set.delete returns a boolean
// (true if that element exists and was deleted, false otherwise)
console.log(exampleSet.delete(90)); // true
console.log(exampleSet.delete(5)); // false Time Complexity: O(1)

// Contains
// Set.has does a quick O(1) lookup to check whether the element exists within the set
console.log(exampleSet.has(60)); // Time Complexity: O(1)
console.log(exampleSet.has(90));
console.log(exampleSet.has(56)); // Time Complexity: O(1)

// Set Intersection ==> set consists of the common elements between two sets
const intersectSets = (setA, setB) => {
  const intersection = new Set();
  setA.forEach((element) => {
    if (setB.has(element)) {
      intersection.add(element);
    }
  });
  return intersection;
};

const setA = new Set([12, 33, 56, 34, 89, 30]);
const setB = new Set([34, 30, 23, 12, 34, 89]);
console.log(intersectSets(setA, setB));

// isSuperSet
// a set is a “superset” of another set if it contains all the elements of the other set

const isSuperSet = (set, subset) => {
  for (let element of subset) {
    if (!set.has(element)) {
      return false;
    }
  }
  return true;
};

const set = new Set([12, 33, 56, 34, 89, 30]);
const subset = new Set([34, 30, 23, 12, 34, 89]);
const subset2 = new Set([12, 34, 89, 30]);
console.log(isSuperSet(set, subset));
console.log(isSuperSet(set, subset2));

// Set Union => the union of two sets combines the elements from both sets

const setUnion = (setC, setD) => {
  const union = new Set(setC);
  setD.forEach((element) => union.add(element));
  return union;
};
console.log(setUnion(setA, setB));
const setC = new Set([90, 89, 80, 70, 78, 79]);
console.log(setUnion(setA, setC));

// Set Difference
// the difference of set A from set B is all of the elements in set A that are not in set B

const setDifference = (setE, setF) => {
  const difference = new Set(setE);
  setF.forEach((element) => difference.delete(element));
  return difference;
};
console.log(setDifference(setA, setC));
console.log(setDifference(setA, setB));
console.log(setDifference(setB, setC));

// USING SETS TO CHECK FOR DUPLICATES IN AN ARRAY
/**
 * Check whether there are any duplicates in an array of integers using sets. By converting the
array into a set, the size of the set can be compared with the length of the array to check for
duplicates easily.
*/
const duplicatesCheck = (array) => {
  if (array.length !== new Set(array).size) {
    return true;
  }
  return false;
};

const arr = [90, 89, 80, 70, 78, 79, 89, 80, 90];
const arr1 = [90, 89, 80, 70, 78, 79];
console.log(duplicatesCheck(arr1));
console.log(duplicatesCheck(arr));

// RETURNING ALL UNIQUE VALUES FROM SEPARATE ARRAYS

const uniqueElements = (array1, array2) => {
  const newSet = new Set(array1.concat(array2)); // Space Complexity: O(n + m)
  return Array.from(newSet);
};

const arr4 = [90, 78, 90, 67, 56, 78, 89];
const arr5 = [45, 23, 56, 78, 67, 90, 80, 78, 45, 13];
console.log(uniqueElements(arr, arr1));
console.log(uniqueElements(arr4, arr5));
