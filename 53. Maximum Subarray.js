/*
https://leetcode.com/problems/maximum-subarray/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let sum = 0, maximum = nums[0]
    for(let num of nums){
        sum += num
        maximum = Math.max(sum,maximum)
        if(sum < 0){ 
            sum = 0
        } 
    }    
    return maximum
};