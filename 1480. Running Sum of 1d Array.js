/*
https://leetcode.com/problems/running-sum-of-1d-arra


*/


/*
Time Complexity: - O(N)
SPace Complexity:- O(N)
*/

var runningSum = function(nums) {
    let result = [], sum = 0;
    for(let i = 0; i < nums.length; i++){
         sum += nums[i]
         result.push(sum)
    }
    return result;
};