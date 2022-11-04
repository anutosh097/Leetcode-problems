/*
https://leetcode.com/problems/search-a-2d-matrix/
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/***
Search from top right corner
TC-> O(m + n)
***/

var searchMatrix = function(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;
  
    let row = 0;
    let col = matrix[0].length - 1;
  
    while (col >= 0 && row <= matrix.length - 1) {
      if (matrix[row][col] === target) return true;
      else if (matrix[row][col] > target) col--;
      else if (matrix[row][col] < target) row++;
    }
  
    return false;
  };