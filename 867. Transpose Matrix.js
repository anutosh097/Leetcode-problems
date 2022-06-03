/*
https://leetcode.com/problems/transpose-matrix/
*/


/*
Time Complexity:- O(M*N) for rectangular matrix -> O(N*N) for square matrix
Space Complexity:- O(M*N) for rectangular matrix -> O(N*N) for square matrix
*/

var transpose = function(matrix) {
    //reverse the order of matrix or retain the order whether it is a square matrix or rectangular matrix
    let result = Array.from({length: matrix[0].length}, () => new Array(matrix.length).fill(0))
    
    for(let r=0; r < matrix.length; r++){
        for(let c=0; c< matrix[0].length;c++){
            result[c][r] = matrix[r][c]  //swap the rows and columns to get transpose
        }
    }
   return result
};