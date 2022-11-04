/*
https://leetcode.com/problems/frequency-of-the-most-frequent-element/
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 var maxFrequency = function(nums, k) {
    // sorting so that can easily find the optimal window
nums.sort((a,b)=>a-b);
// left - left pointer of window
// right - right pointer of window
let left=0,right=0;
let max=Math.max(); // without any args, Math.max() is -Infinity
let total=0             // total - total sum of elements in the window

while(right < nums.length){
    total+=nums[right]
        // Checking if the we can achieve elements in this window
        // If it exceeds k then shrinking the window by moving left pointer
        // For optimal we will make all elements in the array equal to
        // the maximum value element
                console.log((right-left+1) * nums[right] - total, k)

    while((right-left+1) * nums[right] - total > k){
        total-=nums[left++]
    }        
    max = Math.max(max,right-left+1)
    right++
    console.log(max)
}
return max;
};