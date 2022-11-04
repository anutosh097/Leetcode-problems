/*
https://leetcode.com/problems/koko-eating-bananas/
*/


/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */


 function compareTime(bananaPiles,midVal,hours){
    let time = 0
    for(let i = 0;i < bananaPiles.length;i++){
        if(bananaPiles[i] % midVal !== 0){
           time += Math.floor(bananaPiles[i]/midVal) + 1
        }else{
           time += Math.floor(bananaPiles[i]/midVal)
        }
    }
      
      
      if(time <= hours){
          return true
       }else{
          return false
      }
  }


var minEatingSpeed = function(piles, h) {
  

  
  let start = 1
  let end = [...piles].sort((a,b) => b-a)[0]
  
  
  while(start < end){
          let mid = start + Math.floor((end-start)/2)

        if(compareTime(piles,mid,h) === true){
           end = mid
        }else{
            start = mid + 1
        }
  }
  return end
};