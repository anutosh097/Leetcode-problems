/*
https://leetcode.com/problems/trapping-rain-water/
*/

/**
 * @param {number[]} height
 * @return {number}
 */

/***
brute force approach:- find leftmax and rightmax height of every index while iterating
and find min(rightmax,leftmax) - height[i] for each index to get water stored in each index
and sum them up to get result
TC-> O(N*N)
SC-> O(1)

better approach -> prefix array(store leftmax for each index) and suffix array(store rightmax 
for each index), then find min(rightmax,leftmax) - height[i] for each index to get water stored in each index and sum them up to get result
TC-> O(3N){prefix+suffix+height array traversals} -> O(N)
SC-> O(2N){prefix and suffix arrays} -> O(N)

most optimised approach - two pointer approach, we take a left pointer pointing to beginning of heiht and a right pointer pointing to the end of height array, we take a rightmax and leftmax which is initially zero and keep on updating them as we go from left to right with left pointer or right to left with right pointer depending on whether height[l] <= height[r] or height[r] < height[l], we keep storing units of water in res and when l crosses r we stop and return res
TC-> O(N)
SC-> O(1)
***/

var trap = function(height) {
    if (height == null || height.length === 0) return 0;
    
      let l = 0;
      let r = height.length - 1;
    
      let lMax = 0;
      let rMax = 0;
    
      let res = 0;
    
      while (l < r) {
        lMax = Math.max(lMax, height[l]);
        if (height[l] < lMax) {
          res += lMax - height[l];
        }
    
        rMax = Math.max(rMax, height[r]);
        if (height[r] < rMax) {
          res += rMax - height[r];
        }
    
        height[l] < height[r] ? l++ : r--;
      }
    
      return res;
    };