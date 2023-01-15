# Searching and Sorting

Searching data and sorting through data are fundamental algorithms. Searching refers to
iterating over the data structure’s elements to retrieve some data. Sorting refers to putting
the data structure’s elements in order. The searching and sorting algorithms are different
for every data structure. We will focus on searching and sorting for arrays.

## Searching

As mentioned, searching is the task of looking for a specific element inside a data
structure. When searching in an array, there are two main techniques depending
on whether the array is sorted. In this section, you’ll learn about linear and binary
searching. Linear searches are especially flexible because they can be used with both
sorted and unsorted data. Binary searches are specifically used with sorted data.
However, a linear search has a higher time complexity than a binary search.

## Hashing Techniques

The most important part of a hash table is the hash function. The hash function converts
a specified key into an index for an array that stores all of the data. The three primary
requirements for a good hash function are as follows:
• Deterministic: Equal keys produce equal hash values.
• Efficiency: It should be O(1) in time.
•Uniform distribution: It makes the most use of the array.
The first technique for hashing is to use prime numbers. By using the modulus
operator with prime numbers, a uniform distribution of the index can be guaranteed
With a perfect hashing function, there are no collisions. However, collision-free
hashing is almost impossible in most cases. Therefore, strategies for handling collisions
are needed for hash tables.

## Probing

To work around occurring collisions, the probing hashing technique finds the next
available index in the array. The `linear probing` technique resolves conflicts by finding
the next available index via incremental trials, while `quadratic probing` uses quadratic
functions to generate incremental trials.

## Stacks

A stack is a data structure in which only the last inserted element can be removed
and accessed. Think about stacking plates on a table. To get to the
bottom one, you must remove all the other ones on the top. This is a principle known
as last in, first out (`LIFO`). A stack is great because it is fast. Since it is known that the
last element is to be removed, the lookup and insertion happen in a constant time of
O(1). Stacks should be used over arrays when you need to work with data in the LIFO
form where the algorithm needs to access only the last-added element. The limitation
of stacks is that they cannot access the non-last-added element directly like arrays can;
in addition, accessing deeper elements requires you to remove the elements from the
data structure.

## Queues

A queue is also a data structure, but you can remove only the first added element. This is a principle known as `first in, first out` (`FIFO`). A queue is also great
because of the constant time in its operations. Similar to a stack, it has limitations
because only one item can be accessed at a time. Queues should be used over arrays
when you need to work with data in the `FIFO` form where the algorithm only needs to
access the first added element.

## Linked Lists

A linked list is a data structure in which each node
points to another node. Unlike arrays, which have a fixed size, a linked list is a dynamic
data structure that can allocate and deallocate memory at runtime.
Types of linked list => singly and doubly linked lists.
A node in a singly linked list has the following properties: `data` and `next`. data
is the value for the linked list node, and next is a pointer to another instance of
SinglyLinkedListNode.

### Insertion

The following code block shows how to insert into a singly linked list. If the head of the
linked list is empty, the head is set to the new node. Otherwise, the old heap is saved in
temp, and the new head becomes the newly added node. Finally, the new head’s next
points to the temp (the old head)

## Doubly Linked Lists

A doubly linked list can be thought of as a bidirectional singly linked list. Each node in
the doubly linked list has both a `next pointer` and a `prev pointer`.
 a doubly linked list has a head pointer as well as a tail pointer. The
head refers to the beginning of the doubly linked list, and the tail refers to the end of
the doubly linked list.

## Caching

Caching is the process of storing data into temporary memory so that it can be easily
retrieved for later use if it is required again. As an example, a database system keeps data cached to avoid rereading the hard drive, and a web browser caches web pages (images
and assets) to avoid redownloading the contents. Put simply, in caching, the goal is to
maximize hits (an item is in the cache when requested) and minimize misses (an item is
not in the cache when requested).
In this chapter, two caching techniques will be discussed: least frequently used (LFU)
and least recently used (LRU) caching.

### Understanding Caching

Cache design generally considers these two factors:
• Temporal locality: A memory location that has been recently accessed is likely to be accessed again.
• Spatial locality: A memory location near one that has recently been accessed is likely to be accessed again.

## Trees

A general tree data structure is composed of nodes with children nodes. The first/top
node is called the root node. We will explore many different types of trees
such as binary trees, binary search trees, and self-balancing binary search trees. First,
we will cover what trees are and how they are structured. Then, we will cover
methods of traversing the tree data structure in detail. Finally, we will learn about
binary search trees and self-balancing binary search trees to understand how to store
easily searchable data.

## Binary Trees

A binary tree is a type of tree that has only two children nodes: left and right.

## Tree Traversal

Traversal through an array is simple: you access the tree using the index and increment
the index until the index reaches the size limit. With trees, the left and right pointers have
to be followed in order to go through every element in the tree. There are various ways to
do this, of course; the most popular traversal techniques are `pre-order traversal`, `post-­
order traversal`, `in-order traversal`, and `level-order traversal`.

## Binary Search Trees

Binary search trees (BSTs) also have two children, left and right. However, in a binary
search tree, the left child is smaller than the parent, and the right child is bigger than the parent. BSTs have this structure because this property enables for searching, inserting,
and removing specific values with O(log2(n)) time complexity.

## Insertion in BST

Inserting into the BST requires a couple of steps. First, if the root is empty, the root
becomes the new node. Otherwise, a while loop is used to traverse the BST until the
right condition is met. At each loop iteration, it is checked whether the new node is
greater or smaller than the currentRoot.

## Deletion

This algorithm works by first traversing down the tree looking specifically for the node
with the specified value. When the node is found, there are three possible cases:

• Case 1: The node has no children.
This is the simplest case. If the node has no child, return null.
That node has been deleted now.
• Case 2: The node has one child.
If the node has one child, simply return the existing child. That
child has now bubbled up and replaced the parent.
• Case 3: The node has two children.
If the node has two children, either find the maximum of the left
subtree or find the minimum of the right subtree to replace that
node.

## Searching in the BST

Search can be performed using the property that BST node’s left child is always
smaller than its parent and that BST node’s right child is always greater than its parent.
Traversing the tree can be done by checking whether currentRoot is smaller or greater
than the value to be searched. If currentRoot is smaller, the right child is visited. If
currentRoot is bigger, the left child is visited.

## AVL Trees

AVL is a binary search tree that balances itself
An AVL tree keeps the BST height to a minimum
and ensures O(log2(n)) time complexities for search, insertion, and deletion.

## The Heap

A heap is an important data structure that returns the highest or lowest element in O(1) time.
There are two types of binary heaps: max-heap and min-heap. In max-heap, the
root node has the highest value, and each node’s value is greater than its children. In
min-heap, the root node has the lowest value, and each node’s value is smaller than its
children.

A heap is a tree-like data structure represented using arrays. To get the parent, left child,
and right child of a tree’s node, you can use the index formula.
 Heap Node Index Summary

## Node            Index

(self)          N
Parent          (N-1) / 2
Left child      (N*2) + 1
Right child     (N*2) + 2

Heaps maintain their structure via percolation; when a node is inserted, it “bubbles
up” by repeatedly swapping with elements until the proper heap structure is achieved.
For a min-heap, this means the lowest-valued node at the root. For a max-heap, this
means the highest-valued node at the root. Heaps work fundamentally by percolation,
which allows deletion and insertion in O(log2(n)) time.

## Operation                                   Time Complexity

Deletion (leads to “bubble down”)           O(log2(n))
Insertion (leads to “bubble up”)            O(log2(n))
Heap sort                                   O(n log2(n))

## The Graphs

Graphs are a versatile way of representing connections between objects.graphs are visual representations of the connections between objects.

### • Vertex

A vertex is the node from which graphs are formed. a node will be noted as `V` for Big-O analysis. A vertex is represented using a circle

### • Edge

An edge is the connection between nodes in a graph. Graphically, it is the “line” between the vertices. It will be noted as `E` for Big-O analysis. An edge is represented using a line.

### • Degree of vertex

The degree of a vertex refers to the number of edges on that vertex (node).

### • Sparse graph

A graph is considered sparse when only a small fraction of possible connections exist between vertices.

### • Dense graph

 A graph is considered dense when there are a lot of connections between different vertices.

### • Cyclical graph

A directed graph is considered cyclical if there is a path that travels from a vertex and back to itself.

### • Weights

Weights are values on the edges. Weights can signify various things depending on the context.

## Undirected Graphs

Undirected graphs are graphs that do not have a direction between edges. The edge
implies a mutual connection between the two nodes without a direction. A real-life
example of an undirected graph relationship is friendship. Friendship occurs only if both
parties mutually acknowledge the relationship. Values of the edges within a friendship
graph may indicate how close the friendship is.
Two of the most common ways to do this are by using an adjacency matrix or an
adjacency list. The adjacency list uses a vertex as the key for nodes with its neighbors
stored into a list, whereas an adjacency matrix is a V by V matrix with each element
of the matrix indicating a connection between two vertices.
