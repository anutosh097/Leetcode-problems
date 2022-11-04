/*
https://leetcode.com/problems/merge-intervals/
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/***
optimal method:- approach is to sort all intervals if unsorted, then 



TC-> O(NlogN{sorting} + N{linear traversal})
SC-> O(N){merged intervals result}
***/


var merge = function(intervals) {
    if (!intervals.length) return intervals //if given intervals is empty, then return it as it is,edge    //case
        
       //sort the intervals in case the intervals are not given in sorted order
       // first see the start of every interval is sorted or not, if sorted, then sort by end  of 
       // intervals 
      intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])
      let prev = intervals[0] //store the first interval
      let res = [prev] //resultant that is to be returned
      for (let curr of intervals) {
        if (curr[0] <= prev[1]) { //checking whether merging happens
          prev[1] = Math.max(prev[1], curr[1])
        } else {  //if merging doesn't happen
          res.push(curr)
          prev = curr
        }
      }
      return res
    };