/*
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */


//TC:-  O(N^2)
var twoSum = function(numbers, target) {
    let result = []
    for(let i=0;i<numbers.length;i++){
     for(let j=i+1;j<numbers.length;j++) {
         if(numbers[i] + numbers[j] === target){
             result.push(i+1)
             result.push(j+1)
                 return result

         }
     }  
    }
};


//TC:- O(N) - using two pointers always gives a better tc than nested loops
var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
  
    while (start <= end) {
      if (numbers[start] + numbers[end] === target) return [start + 1, end + 1];
      if (numbers[start] + numbers[end] > target) {
        end--;
      } else {
        start++;
      }
    }
    return [];
  }