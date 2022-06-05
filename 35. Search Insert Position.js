/*
https://leetcode.com/problems/search-insert-position/


*/

/*
Time Complexity:- O(N)
Space Complexity:- O(1)
*/

var searchInsert = function(nums, target) {
    let n = nums.length
    for(let i = 0; i < n; i++)
      
        if(nums[i] == target){
            return i;            
        }
  
       
        else if (nums[i] > target){
            return i;            
        }
  
  
    return n;
};