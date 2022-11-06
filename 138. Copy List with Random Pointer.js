/*
https://leetcode.com/problems/copy-list-with-random-pointer/
*/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

/***
Brute force approach(1st approach):-
# Create a hashmap and clone the nodes and their values by iterating once through the original linked list
# Iterate again through the original linked list but this time with the purpose of connecting
next and random pointers of each node in deep copy linked list where the deep copy nodes can be accessed from hashmap
# return the deep copy linked list
TC-> O(2N) -> O(N)
SC-> O(N){because of using hashmap}


Optimal solution(shown below):-
# Traverse through the original linked list three times
# First traversal is for connecting each node of original linked list to corresponding deep node
and chaining them
# Second traversal is for connecting the random pointers of deep nodes to random nodes following behavior of random pointers of original linked list
# Third traversal is for separating original and deep copy linked lists and aligning the next pointers of each node of both original and deep copy linked lists so that the original and deep copy linked lists are separated and intact
TC-> O(3N){three traversals} -> O(N)
SC-> O(!)

***/


//1st approach
// var copyRandomList = function(head) {
//     if(!head) {
//       return null;
//     }
//     const clones = new Map();
//     let n = head;
//     while(n) {
//       clones.set(n, new Node(n.val));
//       n = n.next
//     }
//     n = head;
//     while(n) {
//       clones.get(n).next = clones.get(n.next) || null;
//       clones.get(n).random = clones.get(n.random) || null;
//       n = n.next
//     }
//     return clones.get(head);
// };



var copyRandomList = function(head) {

    if (!head) return null;
    let curr = head;
    while (curr) { //first traversal
        let copy = new Node(curr.val, curr.next, null); //new Node constructor function
        copy.next = curr.next;                          // defined above
        curr.next = copy;
        curr = curr.next;
        curr = curr.next;
    }
    
    curr = head;
    while(curr) { //Second traversal
        curr.next.random = curr.random ? curr.random.next : null;
        curr = curr.next.next;
    }
    
    curr = head;
    let result = head.next;
    let resPtr = result;
    while(curr) { //third traversal
        curr.next = curr.next.next;
        curr = curr.next;
        resPtr.next = resPtr.next ? resPtr.next.next : null;
        resPtr = resPtr.next;
    }
    
    return result;
};