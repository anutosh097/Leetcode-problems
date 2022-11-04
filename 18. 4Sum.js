/*
https://leetcode.com/problems/4sum/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

/***
Optimal approach:
# sort the nums array in ascending order for the below mentioned algorithm to work
# Use two pointer with i and j, and use low and high to find remaining two of remaining
quadruplets that adds upto given target until they cross each other by ignoring duplicates, as we
need unique/distinct quadruplets as per question
# three cases- sum===target{add all four values to result},
sum < target{increase low}
sum > target{reduce high}

TC-> O(N*N*N)
SC-> O(1)
***/

var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    const result = []
    
    for(let i = 0; i < nums.length - 3; i++) {
        for(let j = i + 1; j < nums.length - 2; j++) {
            let low = j + 1;
            let high = nums.length - 1

            while(low < high) {
                const sum = nums[i] + nums[j] + nums[low] + nums[high];
                if(sum === target) {
                    result.push([nums[i], nums[j], nums[low], nums[high]])
                    while(nums[low] === nums[low + 1]) low++;
                    while(nums[high] === nums[high - 1]) high--;
                    low++;
                    high--;
                } else if(sum < target) {
                    low++
                } else { //sum > target
                    high--
                }
            }   
            while(nums[j] === nums[j + 1]) j++;
        }   
        while(nums[i] === nums[i + 1]) i++;
    }
    return result
};