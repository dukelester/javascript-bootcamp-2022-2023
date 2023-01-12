// We will implement the binary search

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

const simpleBST = new BinartSearchTree();
simpleBST.insert(90);
simpleBST.insert(67);
simpleBST.insert(65);
simpleBST.insert(95);
const myNode = new TreeNode();
console.log(myNode);
console.log(simpleBST);
