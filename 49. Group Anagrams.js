/*
https://leetcode.com/problems/group-anagrams/
*/




var groupAnagrams = function(strs) {
    let group = {}
    
    for(let i=0;i<strs.length;i++){
        const word = strs[i]
        const key = word.split("").sort().join("")
        
        if(!group[key]){
           group[key] = []
         }
        
        group[key].push(word)
    }
    
    return Object.values(group)
};