/*
https://leetcode.com/problems/fibonacci-number/
*/



//TC -> O(2^n)
//SC -> O(n)->height of recursive tree(n)
//recursion
var fib = function(n) {
    if(n===0) return 0
    if(n===1) return 1
    return fib(n-1)+fib(n-2)
};