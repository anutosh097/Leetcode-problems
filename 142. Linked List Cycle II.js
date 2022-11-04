/*
https://leetcode.com/problems/linked-list-cycle-ii/
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/***
Flyod's cycle detection algorithm
***/


var detectCycle = function(head) {
    let fast = head
    let slow = head
    let met = false
    while(fast !== null && fast.next !== null){
         slow = slow.next
        fast = fast.next.next
        if(slow === fast){
           met = true
           break
        }
    }
    if(!met){
       return null
     }else{
         slow = head
         while(slow !== fast){
             slow = slow.next
             fast = fast.next
         }
         return slow
     }
};