/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  minDepth() {
    if (!this.root) return 0;

    const queue = [{ node: this.root, depth: 1 }];

    while (queue.length) {
      const { node, depth } = queue.shift(); // using BFS 
      if (!node.left && !node.right) return depth;

      if (node.left) queue.push({ node: node.left, depth: depth + 1 });
      if (node.right) queue.push({ node: node.right, depth: depth + 1 });
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    const dfs = (node) => {
      if (!node) return 0;
      return 1 + Math.max(dfs(node.left), dfs(node.right));
    };

    return dfs(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */
  maxSum() {
    if (!this.root) return 0;

    let maxPathSum = null;

    const findMaxPath = (node) => {
      if (!node) return 0;

      const leftSum = Math.max(findMaxPath(node.left), 0);
      const rightSum = Math.max(findMaxPath(node.right), 0);

      const localMax = leftSum + rightSum + node.val;
      maxPathSum = maxPathSum === null ? localMax : Math.max(maxPathSum, localMax);

      return node.val + Math.max(leftSum, rightSum);
    };

    findMaxPath(this.root);
    return maxPathSum === null ? 0 : maxPathSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */
  nextLarger(lowerBound) {
    if (!this.root) return null;

    let closest = null;
    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();

      if (node.val > lowerBound && (closest === null || node.val < closest)) {
        closest = node.val;
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return closest;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
