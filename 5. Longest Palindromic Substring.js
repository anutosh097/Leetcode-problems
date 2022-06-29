/*
https://leetcode.com/problems/longest-palindromic-substring/


*/

/*
Time Complexity: - O(N*N)
SPace Complexity:- O(1)
*/

var longestPalindrome = function (s) {
    let startIndex = 0;
    let maxLength = 1;
    //helper function that expands around the center and keeps track of startIndex and currentPalLength
    function expandAroundMiddle(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            let currentPalLength = right - left + 1;
            if (currentPalLength > maxLength) {
                maxLength = currentPalLength
                startIndex = left
            }
            left -= 1
            right += 1
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundMiddle(i + 1, i - 1); //for odd number strings
        expandAroundMiddle(i, i + 1) //for even number strings
    }
    //return substring
    return s.slice(startIndex, startIndex + maxLength)
};