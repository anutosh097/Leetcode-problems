/*
https://leetcode.com/problems/rotate-list/
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
 * @param {number} k
 * @return {ListNode}
 */

/***
SC -> O(1)
TC -> O(N)
***/

var rotateRight = function(head, k) {
    //edge cases,if head is null or head's next is null or number of rotations i.e. k=0, return   //given  head
    if(!head || !head.next || k===0) return head
    
    //calculate the length of linked list
    let present = head
    let lengthList=1
    while(present.next){
        present = present.next
        lengthList+=1
    }
    
    //point the last node to head to make it a circular linked list, and then severe
    // the connection from (lengthList - k) from head, and point new head to (lengthList - k +1) to       // get answer
    present.next = head
        // console.log(k,lengthList)

    // console.log(present,prev)
    k = k % lengthList //as k rotation multiples of list length will return the original list
                       //so we get actual rotations by (k % lengthList), if k >= length 
    k = lengthList - k
    while(k--){
        present = present.next
    }
    
    //new head and point end to null
    head = present.next
    present.next = null
    
    return head
};