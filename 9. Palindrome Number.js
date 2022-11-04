/*
https://leetcode.com/problems/palindrome-number/
*/

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let intToStr = x.toString()
    let reverseInt = ""
    for(let i=intToStr.length-1;i>=0;i--){
        reverseInt += intToStr[i]
    }
    if(intToStr === reverseInt){
       return true
     }else{
        return false
    }
};