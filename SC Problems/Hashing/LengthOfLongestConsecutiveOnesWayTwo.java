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