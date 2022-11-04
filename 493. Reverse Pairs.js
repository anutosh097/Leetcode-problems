/*
https://leetcode.com/problems/reverse-pairs/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

/***
optimised approach:- modified merge sort using recursion and count pairs 
TC-> O(NlogN) + O(N) + O(N) 
SC-> O(N)
***/


var reversePairs = function(nums) {
    let numReversePairs = 0; 
    helper(nums);
    return numReversePairs;
    
    function helper(nums) {
      if (nums.length <= 1) return nums;  //base case,no pairs possible for array length one or empty    //array 
      const length = nums.length;
      const left = helper(nums.slice(0, Math.floor(length/2)));//merge sort recursion left half
      const right = helper(nums.slice(Math.floor(length/2))); //merge sort recursion right half   
      return merge(left, right);    
    }
    
    function merge(left, right) {
      const nums_sorted = [];
      let leftIndex = 0;
      let rightIndex = 0;  
       //count pairs 
      while(leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] > 2 * right[rightIndex]) {
          numReversePairs += (left.length - leftIndex); //getting count
          rightIndex++;
        } else {
          leftIndex++;
        }
      }    
      leftIndex = 0;
      rightIndex = 0;
      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          nums_sorted.push(left[leftIndex]);
          leftIndex++;
        } else {
          let cur = leftIndex;
          nums_sorted.push(right[rightIndex]);
          rightIndex++;
        }
      }
      while (leftIndex < left.length) {
        nums_sorted.push(left[leftIndex]);
        leftIndex++;
      }
      while (rightIndex < right.length) {
        nums_sorted.push(right[rightIndex]);
        rightIndex++;
      }
      return nums_sorted;
    }
  };