/*

https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/
 */


var groupThePeople = function(groupSizes) {
    // Create a new map to store the groups of people inside
let groupTracker = new Map(), len = groupSizes.length;
// Create an array to push the arrays onto
let result = [];
// Create a for loop to loop through each one of the "people" in the groupSizes array
for (let i = 0; i < len; i++) {
  let group = groupSizes[i];
  // If the property already exists
  if (groupTracker.has(group)) {
    // Push the person identifier (i) onto the value array
    groupTracker.get(group).push(i);
    // If the values length euqals the key
  } else {
    // Create a new array to use as a value to a newly created property on the map
    let tempArr = [];
    // Push the index onto that array
    tempArr.push(i);
    // Set the value of the groupSizes array into the maps value
    groupTracker.set(group, [i]);
  }   
  if (group === groupTracker.get(group).length) {
    // Push the vlaue onto the results array
    result.push(groupTracker.get(group));
    // Delete the key and valu efrom the map
    groupTracker.delete(group);
  }
}

return result;
};