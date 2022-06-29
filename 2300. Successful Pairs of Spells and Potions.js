/*
https://leetcode.com/problems/successful-pairs-of-spells-and-potions/
*/


/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */

/*
Time complexity:- O(Nlog(N)) -> implemented binary search intuitively to reduce time complexity otherwise brute force
would have given O(N^2) TC for two nested loops
Space complexity:- O(N)
*/
 var successfulPairs = function(spells, potions, success) {
    const result = [] 
    potions=potions.sort((a,b)=>a-b) //sort the array for making it ready for binary search
  
    for(let i=0;i<spells.length;i++){ 
        let leftI = 0
        let rightI = potions.length-1
        //implement binary search to reduce time complexity
        while(leftI<=rightI){ 
            //edge case for any product of spells[i] times last element of potions array as potions already sorted
            if((spells[i]*potions[potions.length-1]) < success){
                result.push(0)
                break;
            }
            let midI = Math.floor((leftI+rightI)/2) 
            if((spells[i] * potions[midI]) >= success && (((spells[i] * potions[midI-1])<success) || midI===0)){
                result.push(potions.length-midI)
                break;
            }//false
            else if((spells[i] * potions[midI]) >= success){
                rightI = midI-1
            }else if((spells[i] * potions[midI]) < success){
                leftI = midI+1
            }
        }
    }
    return result
};