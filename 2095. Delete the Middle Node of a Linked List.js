/*
https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
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



 var deleteMiddle = function(head) {
    
    let dummyHead = new ListNode(-1, head);
    
    let [prevOfMiddle, slow, fast] = [dummyHead, head, head];
    
    // Use tortoise and hare algorithm to locate the middle node
    while( fast != null && fast.next != null ){
        
        // locate the node before middle node
        prevOfMiddle = slow;
        
        // tortoise moves one step on each round
        slow = slow.next;
        
        // hare mvoves two steps on each round
        fast = fast.next.next;
    }
    
    
    // locate the node after middle node
    let junction = slow.next;
    
    // update linkage betwen previous one and next node
    prevOfMiddle.next = junction;
    
    // release middle node
    slow = null;
    
    return dummyHead.next;
};