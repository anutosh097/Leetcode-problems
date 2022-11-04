/*
https://leetcode.com/problems/majority-element-ii/
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/***
Boyer's Moore solution:- We take two dummy elements, as there can be only two majority elements in
an array that can have more than arralength/3 frequency, at the end we can check the frequency of X and Y and if they occur more than arraylen/3, we add them to res array which is answer, else if the count is not greater than arraylength/3, then we don't add it to res array
TC-> O(2N) -> O(N)
SC-> O(1)
***/

var majorityElement = function(nums) {
    let X = null, countX = 0;
    let Y = null, countY = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === X) countX++;
        else if(nums[i] === Y) countY++;
        else if(!countX) { X = nums[i]; countX++; } 
        else if(!countY) { Y = nums[i]; countY++; } 
        else { countX--; countY--; }
    }
    const Xcount = nums.filter(z => z === X).length;
    const Ycount = nums.filter(z => z === Y).length;
    const limit = Math.floor(nums.length/3)
    const res = [];
    
    if(Xcount > limit) res.push(X);
    if(Ycount > limit) res.push(Y);
    return res;
};