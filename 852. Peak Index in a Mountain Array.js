/*
https://leetcode.com/problems/peak-index-in-a-mountain-array/
*/


/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    let ArrLen = arr.length
    let l = 0;
    let r = ArrLen - 1;
    let mid;
      
    while(l <= r)
    {
      
           mid = (l + r) >> 1;
             
        if((mid == 0 || arr[mid - 1] <= arr[mid]) && 
        (mid == ArrLen - 1 || arr[mid + 1] <= arr[mid]))
            break;
  
        if(mid > 0 && arr[mid - 1] > arr[mid])
            r = mid - 1;
                
        else 
               l = mid + 1;
       }
         
       return mid;
    
};