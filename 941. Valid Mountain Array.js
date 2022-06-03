/*
https://leetcode.com/problems/valid-mountain-array/


*/


/*
Used the two pointer approach for the valid mountain problem,
 if two persons climbing from both left and right finds the same first peak that is a valid mountain else not 
Time Complexity: - O(N)
Space Complexity:- O(1)
*/


var validMountainArray = function(arr) {
    let n = arr.length
    if(n<3) return false
    let left = 0, right = n-1
    while(left < n && arr[left] < arr[left + 1]){
          left ++
    }
    while(right > 0 && arr[right -1] > arr[right]){
          right --
    }
    while(n >= 3 && left === right && left > 0 && right < n-1){
        return true
    }
    return false
};