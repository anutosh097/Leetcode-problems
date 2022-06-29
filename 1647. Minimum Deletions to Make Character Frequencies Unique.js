/*
https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
*/




var minDeletions = function(s) {
    let frequencyCounter = {}
    
    for(let i=0;i<s.length;i++){
        const character = s[i]
        if(!frequencyCounter[character]){
           frequencyCounter[character] =  1
        }else{
            frequencyCounter[character] +=  1
        }
    }

    // return frequencyCounter
    
    let frequencyArray = []
    
    for (const key in frequencyCounter){
        frequencyArray.push(frequencyCounter[key])
    }
    
    frequencyArray.sort((a,b) => (b-a))
    
    
    let deletions = 0
    
    while (frequencyArray.length!=0)
  {
   
    let frequent = frequencyArray[0];
      frequencyArray.shift();
  
    if (frequencyArray.length==0) {
        return deletions;
    }

    if (frequent == frequencyArray[0])
    {
      if (frequent > 1)
      {
        frequencyArray.push(frequent - 1);
        frequencyArray.sort(function(a,b){return b-a;});
      }
  
      deletions++;
    }
  }
  
  return deletions;
    

};