/*
https://leetcode.com/problems/check-if-the-sentence-is-pangram/
*/

/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    let charFrequency = {}
    for(let char of sentence){
      charFrequency[char] = (charFrequency[char] || 0) + 1
    }
    if(Object.keys(charFrequency).length === 26){
       return true
     }else{
         return false
     }
};