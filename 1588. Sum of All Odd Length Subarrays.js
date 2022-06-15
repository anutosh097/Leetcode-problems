/*
https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
*/

/*
brute force
Time Complexity:- O(N^3)
Space Complexity: O(1)
*/
var sumOddLengthSubarrays = function(arr) {
    
    let count=0;
    let arrLen = arr.length
    for(let i=0;i<arrLen;i++){ // helping in selecting the starting point
        
        for(let j=i;j<arrLen;j++){  // helping in selecting the endpoint point
		
            if((i-j)%2==0){  // so that it only count the subarrays which have odd length
			
				for(let k=i;k<=j;k++){ // looping from start point to end point and adding them
					count+=arr[k];
				}
            }
        }
    }
    return count;
};



/*
Time Complexity:- O(N)
Space Complexity: O(1)
https://youtu.be/J5IIH35EBVE
*/
var sumOddLengthSubarrays = function(arr){
    let result = 0
    let arrLen = arr.length
    for(let i=0;i<arrLen;i++){
        let end = i+1
        let start = arrLen-i
        let total = start*end
        let odd=Math.floor(total/2)
        if(total % 2 === 1){
             odd++
        }
        result += odd * arr[i]
    }
    
    return result
}