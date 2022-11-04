/* 
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    let numsLen = nums.length
    let start = 0
    let end = numsLen - 1
    let result = nums[0]
    while(start <= end){
        if(nums[end] >= nums[start]){
           result = Math.min(result, nums[start])
            break
         }
        
         let mid = start + Math.floor((end - start)/2)
         result = Math.min(result, nums[mid])
         if(nums[mid] >= nums[start] ){
            start = mid + 1
         }else if(nums[mid] <= nums[end]){
            end = mid - 1 
         }
    }
    return result
};

