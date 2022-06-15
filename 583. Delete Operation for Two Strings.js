/*
https://leetcode.com/problems/delete-operation-for-two-strings/

https://www.youtube.com/watch?v=NnD96abizww&t=371s
*/


var minDistance = function(W1, W2) {
    let m = W1.length, n = W2.length
    if (m < n) [W1, W2, m, n] = [W2, W1, n, m]
    let WA1 = W1.split(""), WA2 = W2.split(""),
        dpLast = new Uint16Array(n + 1),
        dpCurr = new Uint16Array(n + 1)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) 
            dpCurr[j+1] = WA1[i] === WA2[j]
                ? dpLast[j] + 1
                : Math.max(dpCurr[j], dpLast[j+1]);
        [dpLast, dpCurr] = [dpCurr, dpLast]
    }
    return m + n - 2 * dpLast[n] 
};



/*
c++ solution

//Dynamic programming and longest common subsequence approach


class Solution {
public:
int minDistance(string& word1, string& word2) {        
    if(size(word1) < size(word2)) swap(word1, word2);
	vector<vector<int> >dp(2, vector<int>(size(word2) + 1));
	for(int i = 0; i <= size(word1); i++) 
		for(int j = 0; j <= size(word2); j++) 
			if(!i || !j) dp[i & 1][j] = i + j;
			else dp[i & 1][j] = word1[i - 1] == word2[j - 1] ? dp[(i - 1) & 1][j - 1] : 1 + min(dp[(i - 1) & 1][j], dp[i & 1][j - 1]);
	return dp[size(word1) & 1][size(word2)];
}
};

*/