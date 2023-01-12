// We will implement the binary search

const e = require('express');

function BinartSearchTree() {
  this.root = null;
}

function TreeNode(value) {
  this.value = value;
  this.leftChild = null;
  this.rightChild = null;
}

BinartSearchTree.prototype.insert = function (value) {
  const myNewNode = new TreeNode(value);
  if (!this.root) {
    this.root = myNewNode;
  } else {
    let currentRoot = this.root;
    while (true) {
      if (currentRoot.value > value) {
        if (currentRoot.leftChild) {
          currentRoot = currentRoot.leftChild;
        } else {
          currentRoot.leftChild = myNewNode;
          break;
        }
      } else if (currentRoot.value < value) {
        if (currentRoot.rightChild) {
          currentRoot = currentRoot.rightChild;
        } else {
          currentRoot.rightChild = myNewNode;
          break;
        }
      } else {
        break;
      }
    }
  }
};

// Time Complexity (for balanced trees): O(log2(n))
// Time Complexity (for unbalanced trees): O(n)
// Time complexity is dependent on the height of the binary search tree.

// Implementing the deletion in the BST

function findMinimum(root) {
  while (root.leftChild) {
    root = root.leftChild;
  }
  return root;
}

function deleteRecursively(root, value) {
  if (!root) {
    return null;
  } if (root.value > value) {
    root.leftChild = deleteRecursively(root.leftChild, value);
  } else if (root.value < value) {
    root.rightChild = deleteRecursively(root.rightChild, value);
  } else {
    if (!root.leftChild && !root.rightChild) {
      return null;
    } if (!root.leftChild) {
      root = root.rightChild;
      return root;
    } if (!root.rightChild) {
      root = root.leftChild;
      return root;
    }
    const temp = findMinimum(root.rightChild);
    root.value = temp.value;
    root.rightChild = deleteRecursively(root.rightChild, value);
    return root;
  }
  return root;
}

BinartSearchTree.prototype.remove = function (value) {
  return deleteRecursively(this.root, value);
};

// Time Complexity (for balanced tree): O(log2(n))
// Time Complexity (for unbalanced trees): O(n)
// Time complexity for deletion is also O(log2(n)) because at most that’s the height that
// will need to be traversed to find and delete the desired node.

// The search

BinartSearchTree.prototype.search = function (value) {
  let currentRoot = this.root;
  let found = false;

  while (currentRoot) {
    if (currentRoot.value > value) {
      currentRoot = currentRoot.leftChild;
    } else if (currentRoot.value < value) {
      currentRoot = currentRoot.rightChild;
    } else {
      found = true;
      break;
    }
  }
  console.log('found!!!!');
  return found;
};

// Time Complexity (for balanced tree): O(log2(n))
// Time Complexity (for unbalanced trees): O(n)
// Note that all of the operations’ time complexities are equal to the height of the binary
// tree search.

const simpleBST = new BinartSearchTree();
simpleBST.insert(90);
simpleBST.insert(67);
simpleBST.insert(65);
simpleBST.insert(95);
const myNode = new TreeNode();
console.log(myNode);
console.log(simpleBST);
console.log(simpleBST.root, simpleBST.remove(90));
console.log(simpleBST.search(90));
console.log(simpleBST.search(65));
