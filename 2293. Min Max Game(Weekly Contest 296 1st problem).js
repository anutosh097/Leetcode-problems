/*
https://leetcode.com/contest/weekly-contest-296/problems/min-max-game/

This could have been also be solved by recursion, actually a recursion problem
*/


/*
Time Complexity:- O(N)
Space Complexity:- O(N)
*/


var minMaxGame = function(nums) {
    let mode = 0;
    while (nums.length > 1) {
      let result = []
      for (let i = 0; i < nums.length; i += 2) {
        if (mode == 0) {
          result.push(Math.min(nums[i], nums[i + 1]));
        } else if (mode === 1) {
          result.push(Math.max(nums[i], nums[i + 1]));
        }
        if (mode == 0) {
          mode = 1;
        } else {
          mode = 0;
        } 
      }
      nums = result;
    }
    return nums[0];
  };