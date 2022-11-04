/*
https://leetcode.com/problems/merge-two-sorted-lists/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    if(list1 === null) return list2
    if(list2 === null) return list1
    if(list1.val > list2.val){
        let temp = list1
        list1 = list2
        list2 = temp
    }
    let result = list1
    while(list1 !== null && list2 !== null){
        let tmp = null
        while(list1 !== null && list1.val <= list2.val){
             tmp = list1 
            list1 = list1.next
        }
        tmp.next = list2
        let temp = list1
        list1 = list2
        list2 = temp
    }
    return result
};