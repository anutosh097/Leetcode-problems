/*
https://leetcode.com/problems/longest-consecutive-sequence/
*/



var longestConsecutive = function(nums) {
    nums.sort((a,b) => a-b)
    console.log(nums)
    let numLength = nums.length,counter = 1,result = [],i=0
    if(numLength === 0) return 0
    while(i<numLength){
        if(nums[i+1]-nums[i]===1 ){
           counter++
            i++
        }else if(nums[i] === nums[i+1]){
           i++
        }else{
          result.push(counter)
          counter = 1
          i++
        }
    }
    result.sort((a,b) => a-b)
    return result[result.length - 1]
};