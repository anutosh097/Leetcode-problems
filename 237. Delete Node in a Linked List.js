/*
https://leetcode.com/problems/delete-node-in-a-linked-list/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
    //given node is not the last node, so there will be a node after the given node
    node.val = node.next.val
    node.next = node.next.next    
};