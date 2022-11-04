/*
https://leetcode.com/problems/sort-an-array/
*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    
    function swap(arr, a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    
    const Compare = {
        LESS_THAN: -1,
        BIGGER_THAN: 1
    };
    
    function defaultCompare(a, b) {
        if (a === b) {
            return 0;
        }
        return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
    }
    
    function mergeSort(arr, compare = defaultCompare) {
        if (arr.length > 1) {
            const { length } = arr;
            const middle = Math.floor(length / 2);
            const left = mergeSort(arr.slice(0, middle), compare);
            const right = mergeSort(arr.slice(middle, length), compare);
            arr = merge(left, right, compare);
        }
        return arr;
    }
    
    function merge(left, right, compare) {
        let i = 0;
        let j = 0;
        const result = [];
        while (i < left.length && j < right.length) {
            result.push(compare(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]);
        }
        return result.concat(i < left.length ? left.slice(i) : right.slice(j));
    }
     
      return mergeSort(nums);
    };