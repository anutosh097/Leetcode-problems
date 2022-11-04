/*
https://leetcode.com/problems/binary-search/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let numLen = nums.length
    let start = 0
    let end = numLen -1
    while(start <= end){
      let mid = start + Math.floor((end - start)/2)
      if(target === nums[mid]){
           return mid
      }
      if(nums[mid] < target){
         start = mid + 1
      }else{
          end = mid - 1
      }
    }
    return -1
};