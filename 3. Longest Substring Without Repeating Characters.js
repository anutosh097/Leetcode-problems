/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/
*/

//brute force approach -> get all substrings and check non repeated substrings and get max length -> O(N^3)
//sliding window approach with hashmap to store key(character) and value(indices) pairs- TC:- O(N),SC:-O(n)) due to hashmap
var lengthOfLongestSubstring = function(s) {
    let windowCharsMap = {}
    let windowStart = 0
    let maxLength = 0
    
    for(let i=0;i<s.length;i++){
        const endChar = s[i]
        
            if(windowCharsMap[endChar] >= windowStart){
                windowStart = windowCharsMap[endChar] + 1
            }
        
        windowCharsMap[endChar] = i
        maxLength = Math.max(maxLength, i - windowStart +1)
    }
        return maxLength
        
    };