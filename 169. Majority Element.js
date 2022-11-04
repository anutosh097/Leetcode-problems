/*
https://leetcode.com/problems/majority-element/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
       
    // Boyer-Moore Voting Algorithm
    // TC-> O(N);SC-> O(1)
    
    let count = 0, candidate = 0
    
    for (let num of nums) {
        if (count == 0) {
            candidate = num
        }
        count += num == candidate ? 1 : -1
    }
    
    return candidate 
};