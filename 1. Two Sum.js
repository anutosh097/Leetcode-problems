/*
https://leetcode.com/problems/two-sum/
*/


/*
Time Complexity: - O(N*N)
Space Complexity:- O(N)
*/ 

var twoSum = function(nums, target) {
    let result = []
    for (let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if((nums[i] + nums[j]) === target){
               result.push(i)
               result.push(j)
             }
        }
    }
    return result
};