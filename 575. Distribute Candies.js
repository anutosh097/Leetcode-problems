/*
https://leetcode.com/problems/distribute-candies/
*/

/**
 * @param {number[]} candyType
 * @return {number}
 */
 var distributeCandies = function(candyType) {
    let candyLen = candyType.length
    let numberofCandiesAllowed = candyLen/2
    let diffCandiesFreq = {}
    for(let i = 0; i < candyLen; i++){
        diffCandiesFreq[candyType[i]] = (diffCandiesFreq[candyType[i]] || 0) + 1
    }
    // console.log(diffCandiesFreq)
    return Math.min(Object.keys(diffCandiesFreq).length,numberofCandiesAllowed )
};