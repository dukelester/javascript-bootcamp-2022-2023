// Tree

function TreeNode(value) {
  this.value = value;
  this.children = [];
}

// Binary Tree
function BinaryTreeNode(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

function BinaryTree() {
  this.root = null;
}

/** The Preorder traversal
 * Pre-order traversal visits nodes in the following order: root (the current node), left, right.
 */
function traversePreorderHelper(node) {
  if (!node) {
    return;
  }
  console.log(node.value);
  traversePreorderHelper(node.left);
  traversePreorderHelper(node.right);
}

BinaryTree.prototype.preorderTraversal = function () {
  traversePreorderHelper(this.root);
};

const newTree = new BinaryTree();
console.log(newTree);

/**
 * In-Order Traversal
 * In-order traversal visits nodes in the following order: left, root (current node), right.
 */

function traversalInOrderHelper(node) {
  if (!node) {
    return;
  }
  traversalInOrderHelper(node.left);
  console.log(node.value);
  traversalInOrderHelper(node.right);
}

BinaryTree.prototype.traversalInOrder = function () {
  traversalInOrderHelper(this.root);
};

/**
 * Post-order Traversal
 * Post-order traversal visits nodes in the following order: left, right, root (the current node)
 */
function traversePostOrderHelper(node) {
  if (!node) {
    return;
  }
  if (node.left) {
    traversePostOrderHelper(node.left);
  }
  if (node.right) {
    traversePostOrderHelper(node.right);
  }
  console.log(node.value);
}

BinaryTree.prototype.traversePostOrder = function () {
  traversePostOrderHelper(this.node);
};

/**
 * Level-order traversal
 * is also known as breadth first search (BFS).Level-Order Traversal
 *This method essentially visits each node level by level instead of
 going deep into the left or right.
 */
BinaryTree.prototype.traverseLevelOrder = function () {
  // The Breath First Search
  let root = this.root;
  const queue = [];
  if (!root) {
    return;
  }
  queue.push(root);
  while (queue.length) {
    const temp = queue.shift(); // remove
    console.log(temp.value);
    if (temp.left) {
      queue.push(temp.left);
    }
    if (temp.right) {
      queue.push(temp.right);
    }
  }
};
