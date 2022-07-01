/*
https://leetcode.com/problems/maximum-units-on-a-truck/
*/


var maximumUnits = function(boxTypes, truckSize) {
    //sort all boxes in increasing order of units to get maximum units
    boxTypes.sort(([b1,u1],[b2,u2]) => u2-u1)
    let lengthBoxTypes = boxTypes.length
    //keep counting boxes while looping through boxes array with counter and 
    //keep track of available boxes, once available boxes becomes 0,loop           //breaks
     let counter = 0, maxUnits = 0, availableBoxes = truckSize,i= 0,totalBoxes=0,totalUnits = 0
     for(let j=0;j<lengthBoxTypes;j++){
        totalBoxes += boxTypes[j][0]
        totalUnits += boxTypes[j][0] * boxTypes[j][1]
     }
     if(totalBoxes < truckSize) return totalUnits
while(availableBoxes > 0){
               counter +=  boxTypes[i][0] 
               if(availableBoxes > boxTypes[i][0]){
                 maxUnits += boxTypes[i][0] * boxTypes[i][1]
                 availableBoxes = Math.abs(availableBoxes - boxTypes[i][0])
                }else if(availableBoxes <= boxTypes[i][0]){
                  maxUnits += availableBoxes * boxTypes[i][1] 
                  availableBoxes = 0
                    // break
                }
                i++
                console.log(maxUnits,availableBoxes,counter)
           }
     
    return maxUnits
};
