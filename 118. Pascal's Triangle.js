/*
https://leetcode.com/problems/pascals-triangle/
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */

/***
TC-> O(N*N)
SC-> O(N*N)
***/

var generate = function(numRows) {
    var pascal = [];//the 2d array that will contain all rows
 for (var i = 0; i < numRows; i++) {
     pascal[i] = []; // every row has an empty array to store values
     pascal[i][0] = 1;//first column of every row is 1
     for (var j = 1; j < i; j++) {
         pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j] //in between columns are sum 
                                                          //of last row's consecutive columns
     }
     pascal[i][i] = 1;//last column of every row is 1
 }
 return pascal; 
};