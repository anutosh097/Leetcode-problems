/*
https://leetcode.com/problems/queue-reconstruction-by-height/
*/


var reconstructQueue = function(people) {
    //arrange in descending order of height and  if same height then increasing //order of k
     people.sort(([h1, p1], [h2, p2]) => (h1 === h2 ? p1 - p2 : h2 - h1))
      const result = []
      for (const item of people) {
        result.splice(item[1], 0, item)
      }
      return result
    };