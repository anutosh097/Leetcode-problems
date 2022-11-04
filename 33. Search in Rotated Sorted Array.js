/*
https://leetcode.com/problems/search-in-rotated-sorted-array/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let numsLen = nums.length
    let start = 0
    let end = numsLen -1 
    while(start <= end){
       let mid = start + Math.floor((end - start)/2)
       if(target === nums[mid]){
         return mid
       } 
       //check if left half is sorted
       if(nums[start] <= nums[mid]){
          if(target >= nums[start] && target <= nums[mid]){
             end = mid  - 1
          }else{
              start = mid + 1
          }
      }
        //check if right half is sorted
        else if(nums[mid] <= nums[end]){
             if(target >= nums[mid] && target <= nums[end]){
                start = mid + 1
             }else{
                end = mid - 1
             }   
       }
       }
        return -1
  }; 