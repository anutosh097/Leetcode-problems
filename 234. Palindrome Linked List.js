/*
https://leetcode.com/problems/palindrome-linked-list/
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
 * @return {boolean}
 */


/***
Reverse the back half of the array, first objective is finding the middle node, which is achieved with Flyod's cycle detection algorithm, that uses two pointers, fast pointer moves twice as fast as slow pointer, and when fast pointer reaches the end, slow pointer reaches the middle.

After this we can reverse the back half of the linked list and then compare the first half and second half values by iterating in one go(loop), if the values are matching it is a palindrome else not

TC->O(N)
SC->O(1)
***/


var isPalindrome = function(head) {
    let slow = head, fast = head, prev, temp
    while (fast && fast.next)
        slow = slow.next, fast = fast.next.next
    prev = slow, slow = slow.next, prev.next = null
    while (slow)
        temp = slow.next, slow.next = prev, prev = slow, slow = temp
    fast = head, slow = prev
    while (slow)
        if (fast.val !== slow.val) return false
        else fast = fast.next, slow = slow.next
    return true
};















