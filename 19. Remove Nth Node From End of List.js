/*
https://leetcode.com/problems/remove-nth-node-from-end-of-list/
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
 * @param {number} n
 * @return {ListNode}
 */

/***
TC-> O(N)
SC-> O(1)
***/

var removeNthFromEnd = function(head, n) {
    //we can see the constructor function called ListNode defined in comments above, why not use it 
    // for creating a node, say the dummy node, we can pass two parameters as given in comments
     // the val and next for dummy node as null and head
    let dummyNode = new ListNode(null, head)
    let fastHare = dummyNode
    let slowRabbit = dummyNode
    for(let i = 0 ;i <= n; i++){
        fastHare = fastHare.next
    }
             // console.log(slowRabbit, fastHare, dummyNode, head)
 
     //Now we will move both hare and rabbit by one place, when hare reaches end node, 
     // rabbit reaches node just before the removal node
     while(fastHare !== null){
           fastHare = fastHare.next
           slowRabbit = slowRabbit.next
     }
 
     slowRabbit.next = slowRabbit.next.next //removing the node to be removed
     return dummyNode.next
     
 };