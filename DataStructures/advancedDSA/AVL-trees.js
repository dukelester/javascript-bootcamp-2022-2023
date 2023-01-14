// The AVL Tree

function AVLTree(value) {
  this.value = value;
  this.leftChild = null;
  this.rightChild = null;
  this.depth = 1;
}

// The height of the AVL tree is based on the height of the children.
AVLTree.prototype.setDepthBasedOnChildren = function () {
  if (!this.node) {
    this.depth = 0;
  } else {
    this.depth = 1;
  }
  if (this.leftChild) {
    this.depth = this.leftChild.depth + 1;
  }
  if (this.rightChild && this.depth <= this.rightChild.depth) {
    this.depth = this.rightChild.depth + 1;
  }
};
