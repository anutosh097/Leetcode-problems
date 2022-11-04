/*
https://leetcode.com/problems/linked-list-cycle/
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
 * @return {boolean}
 */

/***
1st method:- we traverse through thr linked list and store each values in a map/set/object. Everytime while iterating, we check whether the value is already present in the object, if so we can say the linked list is cyclic in nature, but here we have space complexity of O(N) because of the map.ALso it may not also be reliable as the values may occur more than once without the linked list being cyclic unless it has all unique values(mentioned in question). So may be there is a better method, yes 

2nd method is we use Flyod's cycle detection algorithm again- have a slow pointer that moves one step and a fast pointer that moves two steps, now if there is a cycle the slow and fast pointer should meet each other at some point, otherwise if there is not a cycle then the fast pointer will reach null
***/

var hasCycle = function(head) {
    let fast = head
    let slow = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) return true
  }
  return false
};