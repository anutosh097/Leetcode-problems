/*
https://leetcode.com/problems/remove-letter-to-equalize-frequency/
*/

/**
 * @param {string} word
 * @return {boolean}
 */
 const charcode = (c) => c.charCodeAt() - 'a'.charCodeAt();


 var equalFrequency = function(word) {
     const absDiff = (a,b) => Math.abs(a - b);
     
     const counter = [...word].reduce((a,c) => {
         a[charcode(c)]++;
         return a;
     }, Array(26).fill(0));
     
     for(let i = 0; i < 26; i++) {
         if(!counter[i]) continue;
         const copiedCounter = [...counter];
         copiedCounter[i]--;
         const set = new Set(copiedCounter);
         
         if(set.size === 1) return true;
         if(set.size === 2 && set.has(0)) return true;
     }
     return false;
 };