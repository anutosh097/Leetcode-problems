/*
https://leetcode.com/problems/3sum/
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/***
Brute force approach:-
# three nested loops for checking whether arr[i]+arr[j]+arr[k] = 0, if so add them to a set
TC-> O(N*N*N*log(M))
               \
               {for insertion of triplets into set considering there are M triplets}
SC-> O(M)


Better approach:-
# use a loop to store the frequency of all elements in a hashmap
# use two loops, one for a, and other for b, and check if -(a+b) exists in hashmap,if so
sort the triplets and insert it into a set, if duplicate already exists in set after sorting then ignore as unique triplets are needed
TC-> O(N*N*logM)
SC-> O(M+N)
       /  \
 {for set} {for hashmap} 
 M:- considering M number of unique triplets
 
 
 Optimised approach:-
 # sort the array
 # loop through the array and keep a as constant, and use two pointer for the rest part to find b
 and c i.e. check whether {b+c=-a}, if present then that becomes a valid triplet and gets inserted into a set
 # now once done find next a that is not similar to earlier a for valid triplet as we need unique triplets, and also every time we avoid repeated lo and hi as uniqueness is key
 TC-> O(N*N*log(M))
 SC-> O(M)

***/



var threeSum = function(nums) {
    const results = []

// obviously irrelevant if we don't have at least 3 numbers 
if (nums.length < 3) return results

// having the numbers in ascending order will make this problem much easier.
// also, knowing the overall problem  will take at least O(N^2) time, we can
// afford the O(NlogN) sort operation
nums = nums.sort((a, b) => a - b)

// if the question asks us for a custom target, we can control it here
let target = 0

for (let i = 0; i < nums.length - 2; i++) {
    // `i` represents the "left" most number in our sorted set.
    // once this number hits 0, there's no need to go further since
    // positive numbers cannot sum to a negative number
    if (nums[i] > target) break

    // we don't want repeats, so skip numbers we've already seen
    if (i > 0 && nums[i] === nums[i - 1]) continue

    // `j` represents the "middle" element between `i` and `k`.
    // we will increment this up through the array while `i` and `k`
    // are anchored to their positions. we will decrement `k` for
    // for each pass through the array, and finally increment `i`
    // once `j` and `k` meet.
    let j = i + 1

    // `k` represents the "right" most element
    let k = nums.length - 1
    
    // to summarize our setup, we have `i` that starts at the beginning,
    // `k` that starts at the end, and `j` that races in between the two.
    //
    // note that `i` is controlled by our outer for-loop and will move the slowest.
    // in the meantime, `j` and `k` will take turns inching towards each other depending
    // on some logic we'll set up below. once they collide, `i` will be incremented up
    // and we'll repeat the process.

    while (j < k) {
        let sum = nums[i] + nums[j] + nums[k]

        // if we find the target sum, increment `j` and decrement `k` for
        // other potential combos where `i` is the anchor
        if (sum === target) {
            // store the valid threesum
            results.push([nums[i], nums[j], nums[k]])

            // this is important! we need to continue to increment `j` and decrement `k`
            // as long as those values are duplicated. in other words, we wanna skip values
            // we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
            // [[-2,0,2], [-2,0,2]].
            //
            // (i'm not a fan of this part because we're doing a while loop as we're
            // already inside of another while loop...)
            while (nums[j] === nums[j + 1]) j++
            while (nums[k] === nums[k - 1]) k--

            // finally, we need to actually move `j` forward and `k` backward to the
            // next unique elements. the previous while loops will not handle this.
            j++
            k--

        // if the sum is too small, increment `j` to get closer to the target
        } else if (sum < target) {
            j++

        // if the sum is too large, decrement `k` to get closer to the target
        } else { // (sum > target)
            k--
        }
    }
}

return results
};