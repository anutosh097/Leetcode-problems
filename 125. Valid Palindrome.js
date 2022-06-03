/*
https://leetcode.com/problems/valid-palindrome/



*/


/*
 Mirror concept - 1st approach
 Time Complexity:- O(N)
 Space Complexity:- O(1)
*/

var isPalindrome = function(s) {
    /*
    convert to lowercase to ignore cases and sanitize string using regex to remove non alphanumeric
     characters i.e. whitespaces, line breaks, commas, special characters etc
    */
    s = s.toLowerCase().replace(/[\W_]/g,"");
    /*
    two pointer approach where left pointer starts at beginning of array and right pointer starts from end of array,
    using mirror concept
    LEVEL (odd characters) -> As V is in the middle with same characters on both right and left, 
       LE |V| EL ,so it is a mirror and hence palindrome
    HANNAH (even characters) -> it works here as well HAN |  NAH , so mirror concept applies here as well
    */
    let left = 0, right = s.length - 1;
    // if the while loop never returns false in the condition that means it is a palindrome
    while(left < right){
        if(s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }
    //return true as while loop never encountered a false condition throughout
    return true
};


/*
Reverse the string and match with original - 2nd approach
 Time Complexity:- O(N)
 Space Complexity:- O(N)
*/

var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[\W_]/g,"");
   let reverse = ""
  for(let character of s){
      reverse = character + reverse
  }
    return reverse === s
};