/*
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let firstOccurence = function(arr,search){
        let arrLen = arr.length
        let start = 0
        let end = arrLen - 1
        let result = -1
        while(start <= end){
            let mid = start + Math.floor((end - start)/2)
            if(search === arr[mid]){
               result = mid
               end = mid - 1
            }else if(search < arr[mid]){
               end = mid - 1
            }else{
                start = mid + 1
            }
        }
        return result
    }
    
        let lastOccurence = function(arr,search){
        let arrLen = arr.length
        let start = 0
        let end = arrLen - 1
        let result = -1
        while(start <= end){
            let mid = start + Math.floor((end - start)/2)
            if(search === arr[mid]){
               result = mid
               start = mid + 1
            }else if(search < arr[mid]){
               end = mid - 1
            }else{
                start = mid + 1
            }
        }
        return result
    }
    
    return [firstOccurence(nums,target),lastOccurence(nums,target)]
};