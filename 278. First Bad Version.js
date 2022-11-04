/*
https://leetcode.com/problems/first-bad-version/
*/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {

        let start = 1
        let end = n
        let result = n
        while(start <= end){
              let mid = start + Math.floor((end-start)/2)
              if(isBadVersion(mid)){
                 result = mid
                 end = mid - 1
              }else{
                  start = mid + 1
              }
        }
        return result
    };
};