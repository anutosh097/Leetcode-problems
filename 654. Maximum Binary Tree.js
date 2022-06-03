/*
https://leetcode.com/problems/maximum-binary-tree/

Recursive approach for binary tree
*/


var constructMaximumBinaryTree = function(nums) {
    // Check to see if the length of the nums array is equal to 0, if so, return null
  if (nums.length === 0) return null;
  //  Store the Maximum value in the nums array into a maxVal variable using the Math.max method
  let maximumValue = Math.max(...nums);
  // Find the index of the max value by passing the maxVal variable into the indexOf method of the nums array
  let maximumNumberIndex = nums.indexOf(maximumValue);
  // Create a constant called left with the ternary operator
  // If maxNumIndex is greater than 0, slice the nums array from 0 to maxNumIndex, else return an empty array
  const left = maximumNumberIndex > 0 ? nums.slice(0, maximumNumberIndex) : [];
  // Create a constant called right with the ternary operator
  // If the maxNumIndex is less than the length of the nums array, return a new array with the slice method starting at maxNumIndex + 1, else empty array
  const right = maximumNumberIndex < nums.length ? nums.slice(maximumNumberIndex + 1) : [];
  // Create a constant called node with the TreeNode object passing in the maxVal, and constructMaximumBinaryTree for both the left and right passing in left and right
  const node = new TreeNode(maximumValue, constructMaximumBinaryTree(left), constructMaximumBinaryTree(right))
  // Return the node
  return node;  
};