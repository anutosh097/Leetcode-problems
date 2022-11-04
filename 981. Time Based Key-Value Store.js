/*
https://leetcode.com/problems/time-based-key-value-store/
*/


var TimeMap = function() {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */

TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.map.has(key)) this.map.set(key, []);
    this.map.get(key)[timestamp] = value;
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */

TimeMap.prototype.get = function(key, timestamp) {
    if (!this.map.has(key)) return '';
    const item = this.map.get(key);
    if (item[timestamp]) return item[timestamp];
    while (timestamp-- > -1) {
        if (item[timestamp]) return item[timestamp];
    }
    return '';
};                                                                                                                                                                                                                                                                                            