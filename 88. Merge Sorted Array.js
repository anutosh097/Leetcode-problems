/*
https://leetcode.com/problems/merge-sorted-array/
*/


var merge = function(nums1, m, nums2, n) {
    let first = m - 1;
    let second = n - 1;
  
    for (var i = m + n - 1; i >= 0; i--) {
      if (second < 0) {
        break;
      }
        
      if (first >= 0 && nums1[first] > nums2[second]) {
        nums1[i] = nums1[first];
        first--;
      } else {
        nums1[i] = nums2[second];
        second--;
      }
    }
  };