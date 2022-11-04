/*
https://leetcode.com/problems/bulb-switcher/
*/

/**
 * @param {number} n
 * @return {number}
 */

/***
Initial state is "OFF" for all bulbs

We have n bulbs, number them from bulb_#1 to buld_#n.

Bulb_#k will be "ON" where k has odd times of switch toggle, if and only if, k has odd factors.

For all positive integers, only perfect square numbers have odd factors.
***/

var bulbSwitch = function(n) {
    return Math.floor(n**0.5);
};