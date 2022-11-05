/*
https://leetcode.com/problems/candy/
*/


/**
 * @param {number[]} ratings
 * @return {number}
 */
 var candy = function(ratings) {
    let len = ratings.length
    let candies = new Array(len).fill(1)
     /*
     take a forward and backward array of same length as ratings and then
     fill the arrays according to below logic, at the end loop through forward and backward and take max for each position and add to sum, return sum which is answer
     */
  
      
      //left to right traversal and considering left neighbour of every ith rating
      for (let i = 1; i < len; i++) {
          if (ratings[i] > ratings[i-1]) candies[i] = candies[i-1] + 1
      }
  
     //right to left traversal and considering right neighbour of every ith rating
      for (let i = len - 2; i >= 0; i--) {
          if (ratings[i] > ratings[i+1]) candies[i] = Math.max(candies[i], candies[i+1]+1)
      }
      console.log(candies)
      
      ///get sum of candies
      let sum = 0
      for (let i = 0; i < len; i++) {
          sum += candies[i]
      }
      return sum
  };