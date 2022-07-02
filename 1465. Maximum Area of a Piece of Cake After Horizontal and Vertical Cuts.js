/*
https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/
*/



var maxWidth = function(v,lv,width){
    let mxWidth = 0, compareSuccessive
       if(lv===1) return Math.max(v[0] - 0,width-v[0])
       if(lv===0) return 0
       for(let i=0;i<lv-1;i++){
           compareSuccessive = v[i+1] - v[i]
            mxWidth = Math.max(compareSuccessive,mxWidth)
       } 
       return Math.max(mxWidth,v[0] - 0,width-v[lv-1])
    }
    
    var maxHeight = function(h,l,height){
       let mxHeight = 0, compareSuccessive
       if(l===1) return Math.max(h[0] - 0,height-h[0])
       if(l===0) return 0
       for(let i=0;i<l-1;i++){
           compareSuccessive = h[i+1] - h[i]
            mxHeight = Math.max(compareSuccessive,mxHeight)
       } 
       return Math.max(mxHeight,h[0] - 0,height-h[l-1])
    }
    
    
    
    var maxArea = function(h, w, horizontalCuts, verticalCuts) {
        let lengthHorizontalCuts = horizontalCuts.length
        let lengthVerticalCuts = verticalCuts.length
        horizontalCuts.sort((a,b) => a-b)
        verticalCuts.sort((a,b) => a-b)
             let modulo = 1000000007n
    
             let maxH = maxHeight(horizontalCuts,lengthHorizontalCuts,h)
             let maxW = maxWidth(verticalCuts,lengthVerticalCuts,w)
             let result = BigInt(maxH)*BigInt(maxW) % modulo
              return result
    };