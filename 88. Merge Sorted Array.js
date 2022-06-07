/*
https://leetcode.com/problems/merge-sorted-array/
*/

/*
Time Complexity:- O(N)
Space Complexity:- O(1) -> No usage of a third array which saved space 
*/


var merge = function(nums1, m, nums2, n) {
    //get the last indices of non empty nums1 and nums2
    let first = m - 1;
    let second = n - 1;
  
//loop the resultant array from last to first 
    for (var i = m + n - 1; i >= 0; i--) {
      if (second < 0) {
        break;
      }
/*
check whether last non-zero element of nums1 > last element of nums2, if so then last element 
of resultant array is nums1 for last and this goes on till beginning of resultant
*/
      if (first >= 0 && nums1[first] > nums2[second]) {
        nums1[i] = nums1[first];
        first--; 
      } else {
        //else last of resultant is  last of nums2 and goes on till beginning of resultant
        nums1[i] = nums2[second];
        second--;
      }
    }
  };