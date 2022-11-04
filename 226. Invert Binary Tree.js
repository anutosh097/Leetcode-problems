/*
https://leetcode.com/problems/invert-binary-tree/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
/***
DFS-Depth first search{using stacks}
***/

var invertTree = function(root) {
    const stack = [root];
    while (stack.length) {
      const n = stack.pop();
        console.log(n,stack)
      if (n != null) {
        [n.left, n.right] = [n.right, n.left];
        stack.push(n.left, n.right);
      }
    }
  
    return root;
  };