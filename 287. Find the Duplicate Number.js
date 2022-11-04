/*
https://leetcode.com/problems/find-the-duplicate-number/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    //create an object to store the frequency of each integer
    let frequency = {}
    //loop through the array and if the integer is already present in the object then return the         //integer
    for(let num of nums){
        if(!(num in frequency)){
            frequency[num] = 1
         }else{
            return num
             break
         }
    }
};