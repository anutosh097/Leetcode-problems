/*
https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/
*/


var minMoves2 = function(nums) {
    nums.sort((a,b) => a-b)
    let compareWithIndex
    let minimumMoves = 0
    const lengthArr = nums.length
    if(lengthArr % 2 === 0){
       compareWithIndex = lengthArr/2 - 1
    }else{
       compareWithIndex = Math.ceil(lengthArr/2) - 1
    }
    for(let i=0;i<nums.length;i++){
        minimumMoves += Math.abs(nums[compareWithIndex] - nums[i])
    }
    return minimumMoves
};