/*
https://leetcode.com/problems/add-two-numbers/
*/


var addTwoNumbers = function(l1, l2) {
    let head = null;
   let temp = null;
   let carry = 0;
   while (l1 !== null || l2 !== null) {
       let sum = carry;
       if (l1 != null) {
           sum += l1.val;
           l1 = l1.next;
       }
       if (l2 != null) {
           sum += l2.val;
           l2 = l2.next;
       }

       let node = new ListNode(Math.floor(sum) % 10);
       carry = Math.floor(sum / 10);
       if (temp == null) {
           temp = head = node;
       }
       else {
           temp.next = node;
           temp = temp.next;
       }
   }

   if (carry > 0) {
       temp.next = new ListNode(carry);
   }
   return head;
};