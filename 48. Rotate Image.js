/*
https://leetcode.com/problems/rotate-image/
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/***
1st method: - take a new matrix and make the first row as last column, 2nd row as 2nd last column and so on
TC-> O(N*N)
SC:- O(N*N)

optimal method:- transpose the matrix and then reverse the rows
TC:- O(2N*N) -> O(N*N)
SC:- O(1)
***/


var rotate = function(matrix) {
    let noRows = matrix.length
    let noCols = matrix[0].length
    //transpose the matrix
    for (let i=0;i<noRows;i++) {
        for (let j=i;j<noCols;j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
 //reverse each of the rows
    for (let i=0;i<noRows;i++) {
        for (let j=0;j<noCols/2;j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][noCols-j-1];
            matrix[i][noCols-j-1] = temp;
        }
    }    
};