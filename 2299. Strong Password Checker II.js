/*
https://leetcode.com/problems/strong-password-checker-ii/
*/

/**
 * @param {string} password
 * @return {boolean}
 */
 var strongPasswordCheckerII = function(password) {
    let  checkOne;
      if (password.length < 8) return false;
      let regEx = /(?=.*[A-Z])(?=.*[a-z])(?=.*(\d))(?=.*[!@#$%^&*()+-]).{8,}/;
      if (password.match(regEx)) {
        checkOne = true;
      } else {
        return false;
      }
      for (let i = 0; i < password.length - 2; ++i) {
        if (password[i] === password[i+1]) return false;
      }
  
      return checkOne;
  };

  /*
  java solution without regex

  class Solution {
   public boolean strongPasswordCheckerII(String password) {
        boolean upper = false, lower = false, digit = false, special = false;
        if(password.length() < 8)
            return false;
        String specials = "!@#$%^&*()-+";
        HashMap<Character, Integer> map = new HashMap();
        for(char c: specials.toCharArray())
            map.put(c, 1);
        for(int i = 0; i < password.length(); i++)
        {
            if(i > 0 && password.charAt(i) ==  password.charAt(i-1))
                return false;
            char c = password.charAt(i);
            if(c >= 'A' && c <= 'Z')
                upper = true;
            if(c >= 'a' && c <= 'z')
                lower = true;
            if(c >= '0' && c <= '9')
                digit = true;
            if(map.containsKey(c))
                special = true;
        }
        return upper && lower && special && digit;
    }
}
  
  
  */