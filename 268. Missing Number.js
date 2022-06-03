/*
https://leetcode.com/problems/missing-number/
*/ 

/*
Time Complexity: - O(N)
SPace Complexity:- O(1)
*/ 

var missingNumber = function(nums) {
    for(let i=0;i<nums.length + 1;i++){
        if(!nums.includes(i)){
           return i
        }
    }
};