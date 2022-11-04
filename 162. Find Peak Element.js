/*
https://leetcode.com/problems/find-peak-element/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
    let numsLen = nums.length
    let start = 0
    let end = numsLen -1
    let mid
    while(start <= end){
          mid = start + Math.floor((end-start)/2)
          
          if((mid === 0 || nums[mid] >= nums[mid-1]) && (mid === numsLen - 1 || nums[mid] >= nums[mid+1])){
             break
          }
        
        if(mid > 0 && nums[mid - 1] >= nums[mid]){
           end = mid -1
        }else{
            start = mid + 1
        }
    }
    return mid
};