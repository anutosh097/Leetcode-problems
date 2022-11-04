/*
https://leetcode.com/problems/most-frequent-even-element/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

/***
TC-> O(N)
SC-> O(N)
***/

var mostFrequentEven = function(nums) {
    let map = new Map(); //create a hashmap to store frequency of all even nos in array
    let max_freq = 0, element = -1;//default element value is -1 if no such element exists as per Q
    /*
      traverse through the array and store frequency of even numbers in hashmap
    */
    for(let num of nums){
        //if even number element exists, set it's count by 1 
        if(num % 2 == 0)    map.set(num, (map.get(num) || 0) + 1);
        
        //keep on updating the most frequent even element
        if(num % 2 == 0 && max_freq <= map.get(num)){
            if(max_freq == map.get(num)){ //in case of tie,get minimum element like said in question
                element = Math.min(element, num);
            }else{ //in case of no tie, set element as num which is answer & update max_freq
                element = num;
                max_freq = map.get(element);
            }
        }
    }
    return element;
};