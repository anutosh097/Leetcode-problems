/*
https://leetcode.com/problems/sort-characters-by-frequency/

*/

var frequencySort = function(s) {
    // Create a hash map to store the frequency of each character in the string
  let characterTracker = new Map(), len = s.length;
  // Loop through the string targeting each character
  for(let i=0; i<len; i++) {
    // If it does NOT exist, create it and initialize to 1
    if(!characterTracker.has(s[i])){
      //characterTracker[s[i]] = 1;
      characterTracker.set(s[i], 1);
    } else {
      // If the character exists as a property, increment it by one
      //characterTracker[s[i]]++;
      characterTracker.set(s[i], characterTracker.get(s[i]) + 1);
    }
  }

  // Sort the hash map so the character with the greatest frequency come first
  const sortedCharacterTracker = [...characterTracker.entries()].sort((a, b) => b[1] - a[1])
  
  // Iterate over the hash map building the string as you loop through
  let answer = "";
  sortedCharacterTracker.map((el) => {
    answer += (el[0]).repeat(el[1])
  })
  // Return the result or answer
  return answer;
};