/*
https://leetcode.com/problems/decode-the-message/
*/


var decodeMessage = function(key, message) {
    let lowercaseStart = 97
    let lowercaseEnd = 122
    let i=0
    let storeCipher = {}
    let keyLength = key.length
    let messageLength = message.length
    /*
    map all the leeters of key to lowercase english alphabets and store in a javascript object if not present to access later
    */
    while(i<keyLength){
       if(!storeCipher[key[i]]){
           if(key[i] === " "){
                        storeCipher[key[i]] = " "
           }else{
                         storeCipher[key[i]] = String.fromCharCode(lowercaseStart)
                         lowercaseStart++
           }
       }
        
        i++
        
    }
    storeCipher[" "] = " "
    // return storeCipher
    let result = ""
    /*
    loop through message and get the actual letters from the stored object 
    */
    for(let j=0;j<messageLength;j++){
        result += storeCipher[message[j]]
    }
    return result
};