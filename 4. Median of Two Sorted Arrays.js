/*
https://leetcode.com/problems/median-of-two-sorted-arrays/

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = [...nums1, ... nums2]
    nums3.sort((a,b) => a-b)
    let arrLen = nums3.length
    let start = 0
    let end = nums3.length-1
    /* return nums3 */
  while(start <= end){
    let mid = start + Math.floor((end - start)/2)
      if(arrLen % 2 === 0){
        return (nums3[mid] + nums3[mid+1])/2
      }else{
        return nums3[Math.floor(mid)]
      }
    }
  };