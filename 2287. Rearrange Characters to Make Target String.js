/*
https://leetcode.com/problems/rearrange-characters-to-make-target-string/
*/

/*
Time Complexity: - O(N*N)
Space Complexity:- O(N)
*/


var rearrangeCharacters = function(s, target) {
    // Create a flag to let us know if we've encountered a character
    let flag = 0, totalOccurances = 0, sLen = s.length, tLen = target.length, strArray = s.split("");
    console.log(strArray);
    // loop through the string while a target character still exists
    for (let i = 0; i < sLen; i++) {
      // Loop through the target word 
      for (let j = 0; j < tLen; j++) {
        // Check for the index of the character
        flag = strArray.indexOf(target[j]);
        // If the flag ever returns false
        if (flag === -1) return totalOccurances;
        // Remove the character from s
        strArray.splice(flag, 1);
      }
      totalOccurances++;
    }
    return totalOccurances;
  };