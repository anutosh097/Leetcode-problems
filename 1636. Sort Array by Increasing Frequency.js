/*
https://leetcode.com/problems/sort-array-by-increasing-frequency/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 let frequencySort = function(nums) {
    //create an empty object to take care of frequency of integers
    let result = {}
    //loop through array and record the frequency of integers in array
    for(let num of nums){
        result[num] = (result[num] || 0) + 1
    }
    //loop through object keys and check arrange them in increasing order of frequencies
    let entries = Object.entries(result) //create a 2d array with key value pairs
    let resArr = entries.sort((a,b) => {if(a[1]===b[1]){return b[0]-a[0]}else{ return a[1]-b[1]}}) 
           //if frequencies are same, then sort keys in decreasing order-taken care in sort() function
    let resultArray=[]
    for(let i=0;i<resArr.length;i++){
        for(let j=1;j<=resArr[i][1];j++){
            resultArray.push(Number(resArr[i][0]))
        }
    }
   return resultArray
};