/*
https://leetcode.com/problems/maximum-product-of-three-numbers/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

/***
Optimal approach
# sort the array in ascending order and get the product of last three numbers
# also get the product of first two numbers and last number
# compare both and return the max
***/

var maximumProduct = function(nums) {
    nums.sort((a,b) => a-b)
    let arrLen = nums.length
    let lastThreeMax = nums[arrLen-1] * nums[arrLen - 2] * nums[arrLen - 3]
    let firstTwoLastOne = nums[0] * nums[1] * nums[arrLen-1]
    return Math.max(lastThreeMax,firstTwoLastOne)
};