public class LengthOfLongestConsecutiveOnesWayTwo {
/**
 * Pattern used is Sliding window technique
 * Why this works
The window contains at most one 0, which we can fill by swapping in a 1 from outside.
If the window has more than one 0, we shrink it until one zero remains.
The swap doesn’t increase the total count of 1s globally; hence we cap by totalOnes.


Complexity:

Time: O(n)
Space: O(1) (optimal)
This is typically cleaner and avoids building L/R arrays.
 */
    public static void main(String[] args){
        String A = "111011101";
        //  String A = "000";
        // String A = "111";
    //    String A = "1101101011";
       System.out.println(solve(A));
    }

    public static int solve(String A) {
     
    int n = A.length();
    int totalOnes = 0;
    for (int i = 0; i < n; i++) if (A.charAt(i) == '1') totalOnes++;

    int left = 0, zeros = 0, best = 0;
    for (int right = 0; right < n; right++) {
        if (A.charAt(right) == '0') zeros++;

        while (zeros > 1) {
            if (A.charAt(left) == '0') zeros--;
            left++;
        }
        best = Math.max(best, right - left + 1);
    }
    return Math.min(best, totalOnes);

    }
}




/*
DRY RUN

dry run this step by step so you can see exactly how the sliding window technique works here.

We’ll use the example string:

Code
A = "111011101"
🔎 Step 1: Count total number of 1s
We loop through the string:

111011101 → totalOnes = 7

This is important because even if our window tries to include more than 7 ones (by swapping), the maximum possible consecutive ones cannot exceed the total number of ones in the string.

🔎 Step 2: Sliding window setup
We maintain:

left → start of window

right → end of window

zeros → number of zeros in current window

best → maximum window length found

🔎 Step 3: Expand window with right
We iterate through each character:

Iteration 1: right = 0 → char = '1'
zeros = 0

window = [0..0] → length = 1

best = 1

Iteration 2: right = 1 → char = '1'
zeros = 0

window = [0..1] → length = 2

best = 2

Iteration 3: right = 2 → char = '1'
zeros = 0

window = [0..2] → length = 3

best = 3

Iteration 4: right = 3 → char = '0'
zeros = 1

window = [0..3] → length = 4

best = 4

Iteration 5: right = 4 → char = '1'
zeros = 1

window = [0..4] → length = 5

best = 5

Iteration 6: right = 5 → char = '1'
zeros = 1

window = [0..5] → length = 6

best = 6

Iteration 7: right = 6 → char = '1'
zeros = 1

window = [0..6] → length = 7

best = 7

Iteration 8: right = 7 → char = '0'
zeros = 2 → ❌ too many zeros

Shrink from left until zeros ≤ 1

Shrink steps:

left = 0 → char '1' → zeros still 2

left = 1 → char '1' → zeros still 2

left = 2 → char '1' → zeros still 2

left = 3 → char '0' → zeros = 1

Now window = [4..7] → length = 4

best = max(7, 4) = 7

Iteration 9: right = 8 → char = '1'
zeros = 1

window = [4..8] → length = 5

best = 7

🔎 Step 4: Final Answer
At the end, best = 7.
But we must cap it by totalOnes = 7.

So result = 7.

✅ Why this works
The window always contains at most one zero (since we can swap one zero with a one outside).

If more than one zero enters, we shrink from the left until only one zero remains.

This ensures we’re checking the longest possible consecutive ones achievable with one swap.

Finally, we cap by totalOnes because swapping doesn’t magically create new ones.

👉 For A = "111011101", the longest consecutive ones achievable = 7.
That corresponds to swapping the zero at index 3 or 7 with a one elsewhere.

*/
