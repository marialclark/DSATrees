Tree and Binary Tree Algorithms
This repository showcases implementations of foundational algorithms for tree and binary tree data structures. As part of my software engineering journey, I have developed solutions to manipulate and traverse these structures efficiently, highlighting their practical applications in problem-solving.

Project Overview
This project demonstrates how to work with both n-ary trees and binary trees, including creating, traversing, and performing computations on these data structures. It covers a range of methods designed to handle common operations, such as finding the depth of a tree, calculating sums, and identifying specific elements.

Technologies Used:
JavaScript: Core programming language for the implementation.
Node.js: Runtime for running and testing the code.
Jest: Testing framework to ensure robust and accurate implementation.

Features
1. N-ary Trees
An n-ary tree is a tree where each node can have zero or more child nodes. The Tree class provides the following functionalities:

sumValues: Calculates the sum of all node values in the tree.
countEvens: Counts the number of nodes with even values.
numGreater(x): Returns the count of nodes with values greater than a specified threshold, x.

2. Binary Trees
A binary tree is a hierarchical data structure where each node has at most two children (left and right). The BinaryTree class includes:

minDepth: Determines the minimum depth of the tree, defined as the shortest path from the root node to a leaf.
maxDepth: Finds the maximum depth of the tree, defined as the longest path from the root node to a leaf.
maxSum: Computes the maximum path sum in the tree, where a path can start and end at any node but cannot revisit nodes.
nextLarger(x): Finds the smallest node value that is greater than a given number, x. Returns null if no such value exists.
