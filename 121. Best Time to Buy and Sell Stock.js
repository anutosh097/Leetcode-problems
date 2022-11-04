/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
*/

/**
 * @param {number[]} prices
 * @return {number}
 */

/***
1st method:- compare each index value with all other value and store the max positive difference
TC-> O(N*N)
SC-> O(1)


2nd method(optimal):- Make a single pass through the array and keep searching for minimum value on the left as we want maximum profit and then find the maximum of the difference
TC-> O(N)
SC-> O(1)
***/


var maxProfit = function(prices) {
    let maxPro = 0
    let min = Infinity
    for(let i = 0;i < prices.length;i++){
       min = Math.min(min,prices[i])
       maxPro = Math.max(maxPro, prices[i] - min)
    }
    return maxPro
};