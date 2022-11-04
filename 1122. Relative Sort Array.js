/*
https://leetcode.com/problems/relative-sort-array/
*/


/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
    let res = [], rem=[]
    for(let i = 0;i < arr2.length;i++){
        for(let j = 0;j < arr1.length;j++){
            if(arr2[i] === arr1[j]){
               res.push(arr1[j])  
             }
        }
    }
    for(let each of arr1){
        if(!(res.includes(each))){
           rem.push(each)
         }
    }
    // console.log(res,rem)
    return [...res,...rem.sort((a,b) => a-b)]
};