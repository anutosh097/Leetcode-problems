/*
https://leetcode.com/problems/find-smallest-letter-greater-than-target/
*/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 var nextGreatestLetter = function(letters, target) {
    let lettersArr = letters.length
    let start = 0
    let end = lettersArr - 1
    for(let i=0;i<=end;i++){
        letters[i] = letters[i].charCodeAt(0)
    }
    let find = target.charCodeAt(0)
    let res = letters[0]
    
    while(start <= end){
         let mid = start + Math.floor((end-start)/2)
         if(letters[mid] > find){
            res = letters[mid]
            end = mid - 1
         }else{
             start = mid + 1
         }
    }
    return String.fromCharCode(res)
};