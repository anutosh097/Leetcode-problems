/*
https://leetcode.com/problems/reverse-linked-list/
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
 var reverseList = function(head) {
    let prev = null
  let curr = head
  let next = null
  
  while(curr!== null){
      // save next
      next = curr.next
      // reverse
      curr.next = prev
      // advance prev and curr
      prev = curr
      curr = next
  }
  return prev;
};

/***
TC->O(n)
SC->O(1)
***/