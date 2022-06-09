/*
https://leetcode.com/problems/remove-palindromic-subsequences/
*/


/*
TimeComplexity:- O(N)
SpaceComplexity:- O(1)
*/

var removePalindromeSub = function(s) {
    function isPalindrome(str)
   {
       // Start from leftmost and 
       // rightmost corners of str
       let l = 0;
       let h = str.length - 1;
       
       // Keep comparing characters 
       // while they are same
       while (h > l)
           if (str[l++] != str[h--])
               return false;
       
       return true;
   }
       
   // Returns count of minimum palindromic 
   // subsequences to be removed to
   // make string empty
 
       // If string is empty
       if (s[0] == '')
           return 0;
       
       // If string is palindrome
       if (isPalindrome(s))
           return 1;
       
       // If string is not palindrome
       return 2;
   
};