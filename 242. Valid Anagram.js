/*
https://leetcode.com/problems/valid-anagram/
 */



var isAnagram = function(s, t) {
    
    if(s.length !== t.length){
        return false
    }
    
    const sCharCounts = {}
    
    for(let i = 0; i < s.length; i++){
        const sChar = s[i]
        
        sCharCounts[sChar] = sCharCounts[sChar] + 1 || 1
    }
    
    for(let j=0;j < t.length;j++){
        const tChar = t[j]
        
        if(!sCharCounts[tChar]){
           return false
        }else{
          sCharCounts[tChar]--
        }
    }
    
    return true
};