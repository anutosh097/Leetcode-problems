/*
https://leetcode.com/problems/h-index-ii/
*/


/**
 * @param {number[]} citations
 * @return {number}
 */
 var hIndex = function(citations) {
    let citationsLen = citations.length
    let start = 0
    let end = citationsLen - 1
    let result = 0
     if(citationsLen === 0) return 0;
    while(start <= end){
         let mid = start + Math.floor((end-start)/2)
        if(citations[mid] === citationsLen - mid){
            return citations[mid];
         }else if(citations[mid] > (citationsLen - mid)){
            end = mid - 1;
         }else{
           start = mid + 1;  
         }     
    }
    return citationsLen - start
};