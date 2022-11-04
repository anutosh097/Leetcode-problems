/*
https://leetcode.com/problems/random-pick-with-weight/
*/

/**
 * @param {number[]} w
 */
 var Solution = function(w) {
    this.weight=[];
     this.sum=0;
     for(let i=0;i<w.length;i++){
         this.sum+=w[i]
         this.weight[i]=this.sum;
     }
     
        
 };
 
 /**
  * @return {number}
  */
 Solution.prototype.pickIndex = function() {
         let random=Math.floor(Math.random()*this.sum);
     // let arr=this.weight;
         let left=0,right=this.weight.length-1;
         while(left<=right){
             let mid=Math.floor((right+left)/2);
             if(random<this.weight[mid]){
                 right=mid-1;
             }
             else{
                 left=mid+1;
             }
         }return left;
     }
 
 // var Solution = function(w) {
 //   this.weights = new Map();
 //   this.sum=0;
 //   for (let i=0; i<w.length; i++) {
 //     this.sum += w[i];
 //     this.weights.set(this.sum, i);
 //   }
 // };
 
 // Solution.prototype.pickIndex = function() {
 //   let index = Math.floor(Math.random() * this.sum);
 //   for (let key of this.weights.keys())
 //     if (index<key) return this.weights.get(key)
 // };
 
 /** 
  * Your Solution object will be instantiated and called as such:
  * var obj = new Solution(w)
  * var param_1 = obj.pickIndex()
  */