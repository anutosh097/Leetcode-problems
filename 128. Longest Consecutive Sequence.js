/*
https://leetcode.com/problems/longest-consecutive-sequence/
*/



/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function(nums) {
//     nums.sort((a,b) => a-b)
//     console.log(nums)
//     let numLength = nums.length,counter = 1,result = [],i=0
//     if(numLength === 0) return 0
//     while(i<numLength){
//         if(nums[i+1]-nums[i]===1 ){
//            counter++
//             i++
//         }else if(nums[i] === nums[i+1]){
//            i++
//         }else{
//           result.push(counter)
//           counter = 1
//           i++
//         }
//     }
//     result.sort((a,b) => a-b)
//     return result[result.length - 1]
// };


/***
Hashset concept
TC-> O(N)
SC-> O(N)
***/

var longestConsecutive = function(nums){
    if (nums == null || nums.length === 0) return 0;
 
 const set = new Set(nums);
 let max = 0;

 for (let num of set) {
   if (set.has(num - 1)) continue;  // make sure starting from the beginning of sequence

   let currNum = num;
   let currMax = 1;

   while (set.has(currNum + 1)) {
     currNum++;
     currMax++;
   }
   max = Math.max(max, currMax);
 }

 return max; 
}