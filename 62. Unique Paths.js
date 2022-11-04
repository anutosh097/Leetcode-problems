/*
https://leetcode.com/problems/unique-paths/
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/*
[DP]
The number of paths from (row,col) to the bottom-right 
= the number of paths from (row, col+1) + the number of paths from (row+1, col).

Hence, we will create a m x n dp table; dp[row][col] is the number of paths from given row and column to the bottom-right.
We know that every entry in row=m-1 and every entry in col=n-1 will have a value of 1 because we can only move right or down. So, all these will be our base cases.

So we will traverse the grid backwards and fill our dp table.

The answer will be dp[0][0] since we want to figure out the number of paths from (0,0) to the bottom-right.
*/
var uniquePaths = function(m, n) {
    let dp = new Array(m).fill(0).map(() => new Array(n));
    for (let row = m-1; row >= 0; row--) {
        for (let col = n-1; col >= 0; col--) {
            if (row === m-1 || col === n-1) {
                dp[row][col] = 1;
            } else {
                dp[row][col] = dp[row][col+1] + dp[row+1][col];
            }
        }
    }
    return dp[0][0];
    // T.C: O(M*N)
    // S.C: O(M*N)
};