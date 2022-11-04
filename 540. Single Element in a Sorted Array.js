/*
https://leetcode.com/problems/single-element-in-a-sorted-array/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

/***
as the array is sorted, binary search can be applied. we check whether the mid position index is
odd or even by comparing values with previous and later elements whether they are equal, and use recursion, with corresponding starts and ends, once the element doesn't match with previous or later elements, we get the single element

TC-> O(logN)
SC-> O(1)
***/


var singleNonDuplicate = function(nums) {
    if (nums.length == 1) return nums[0];
     return bsa(0, nums.length - 1);
     function bsa(start, end) {
         let mid = Math.floor((start + end) / 2);
         if (nums[mid] == nums[mid - 1]) return mid % 2 ? bsa(mid + 1, end) : bsa(start, mid);
         if (nums[mid] == nums[mid + 1]) return mid % 2 ? bsa(start, mid - 1) : bsa(mid, end);
         return nums[mid];
     }
 };