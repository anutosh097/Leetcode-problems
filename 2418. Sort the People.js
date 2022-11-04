/*
https://leetcode.com/problems/sort-the-people/
*/

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */


/***
Brute force:
# Create hashmap, map names and heights
# sort heights in descending order
# get names from descending order of heights and return 

TC-> O(N)
SC-> O(N)
***/

var sortPeople = function(names, heights) {
    let length = heights.length;
    let map = new Map();
    for(let i=0; i<length; i++){
        map.set(heights[i], names[i]);
    }
    heights.sort((a,b) => b-a);
    let res = [];
    for(let height of heights){
        res.push(map.get(height));
    }
    return res;
};