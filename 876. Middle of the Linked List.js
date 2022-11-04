/*
https://leetcode.com/problems/middle-of-the-linked-list/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 function getIndex(mid,head){
    let currNodeIndex=0,temp=head
    while(mid !== currNodeIndex){
        temp = temp.next
        currNodeIndex++
    }
     return temp   
} 


var middleNode = function(head) {



    //get the length/size of the linked list to get middle index to be removed, by traversing through
    // linked list
    let dupHead = head
    if(head && !head.next){ //if length is one 
       return head
     }
    let lengthOfList = 0  //for length above one
    while(head.next){
          head = head.next
          lengthOfList++
     }
    // return lengthOfList
    let midIndex = Math.floor((lengthOfList+1)/2)
    
    //get the middle node of the index 
      let middleNode = getIndex(midIndex,dupHead)
      return middleNode
    //return the new list
};

