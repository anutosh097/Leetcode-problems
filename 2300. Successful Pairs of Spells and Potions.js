/*
https://leetcode.com/problems/successful-pairs-of-spells-and-potions/
*/


/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
 var successfulPairs = function(spells, potions, success) {
    const result = [] 
    potions=potions.sort((a,b)=>a-b)
  
    for(let i=0;i<spells.length;i++){ 
        let leftI = 0
        let rightI = potions.length-1
        while(leftI<=rightI){ 
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