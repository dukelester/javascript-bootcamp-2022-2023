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
