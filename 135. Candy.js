/*
https://leetcode.com/problems/candy/
*/


var candy = function(ratings) {
    let len = ratings.length;
let forward = new Array(len);
let backward = new Array(len);
/*
take a forward and backward array of same length as ratings and then
fill the arrays according to below logic, at the end loop through forward and backward and take max for each position and add to sum, return sum which is answer
*/
forward[0] = 1;
backward[len-1] = 1;
for (let i = 1; i < len; i++) {
    if (ratings[i] > ratings[i-1]) forward[i] = forward[i-1] + 1;
    else forward[i] = 1;
}

for (let i = len - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i+1]) backward[i] = backward[i+1] + 1;
    else backward[i] = 1;
}
let sum = 0;
for (let i = 0; i < len; i++) {
    sum += Math.max(forward[i], backward[i]);
}
return sum;
};