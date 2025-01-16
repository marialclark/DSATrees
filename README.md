# **Tree and Binary Tree Algorithms**

This repository showcases implementations of foundational algorithms for tree and binary tree data structures. As part of my software engineering journey, I have developed solutions to manipulate and traverse these structures efficiently, highlighting their practical applications in problem-solving.

---

## **Project Overview**

This project demonstrates how to work with both **n-ary trees** and **binary trees**, including creating, traversing, and performing computations on these data structures. It covers a range of methods designed to handle common operations, such as finding the depth of a tree, calculating sums, and identifying specific elements.

### **Technologies Used**
- **JavaScript**: Core programming language for the implementation.
- **Node.js**: Runtime for running and testing the code.
- **Jest**: Testing framework to ensure robust and accurate implementation.

---

## **Features**

### **1. N-ary Trees**
An n-ary tree is a tree where each node can have zero or more child nodes. The `Tree` class provides the following functionalities:

- **`sumValues`**: Calculates the sum of all node values in the tree.
- **`countEvens`**: Counts the number of nodes with even values.
- **`numGreater(x)`**: Returns the count of nodes with values greater than a specified threshold, `x`.

### **2. Binary Trees**
A binary tree is a hierarchical data structure where each node has at most two children (left and right). The `BinaryTree` class includes:

- **`minDepth`**: Determines the minimum depth of the tree, defined as the shortest path from the root node to a leaf.
- **`maxDepth`**: Finds the maximum depth of the tree, defined as the longest path from the root node to a leaf.
- **`maxSum`**: Computes the maximum path sum in the tree, where a path can start and end at any node but cannot revisit nodes.
- **`nextLarger(x)`**: Finds the smallest node value that is greater than a given number, `x`. Returns `null` if no such value exists.

---

## **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/marialclark/DSATrees.git
   ```
2. Navigate to the project directory:
   ```bash
   cd DSATrees
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## **Usage**

### **Running the Code**
To use the tree and binary tree classes, import them into your project:
```javascript
const { Tree, TreeNode } = require('./tree');
const { BinaryTree, BinaryTreeNode } = require('./binary-tree');
```

### **Testing**
Run the test suite to validate functionality:
```bash
npm test
```

### **Example Usage**

#### **N-ary Tree**
```javascript
const { Tree, TreeNode } = require('./tree');

const root = new TreeNode(10, [
  new TreeNode(6, [new TreeNode(3), new TreeNode(8)]),
  new TreeNode(15, [new TreeNode(20)])
]);
const tree = new Tree(root);

console.log(tree.sumValues()); // Outputs: 62
console.log(tree.countEvens()); // Outputs: 4
console.log(tree.numGreater(10)); // Outputs: 2
```

#### **Binary Tree**
```javascript
const { BinaryTree, BinaryTreeNode } = require('./binary-tree');

const root = new BinaryTreeNode(10, 
  new BinaryTreeNode(6, new BinaryTreeNode(3), new BinaryTreeNode(8)), 
  new BinaryTreeNode(15, new BinaryTreeNode(12), new BinaryTreeNode(20))
);
const binaryTree = new BinaryTree(root);

console.log(binaryTree.minDepth()); // Outputs: 2
console.log(binaryTree.maxDepth()); // Outputs: 3
console.log(binaryTree.maxSum()); // Outputs: 54
console.log(binaryTree.nextLarger(10)); // Outputs: 12
```

---

## **Testing**

The project includes a comprehensive test suite using Jest to ensure the correctness of all methods. To run the tests:
```bash
npm test
```

---

## **Key Takeaways**

- Gained in-depth understanding of tree and binary tree structures.
- Developed efficient algorithms for traversal, searching, and path calculations.
- Strengthened JavaScript testing skills using Jest.

---

## **Author**

- **[Maria Clark](https://github.com/marialclark)** – Software Engineer Fellow at the University of South Florida
