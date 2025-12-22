public class SpecialSubsequencesAGWayOne {
/*
         Prefix Accumulation / Streaming Count (a.k.a. counting subsequences with running totals)
This is the cleanest and optimal approach:

Maintain a running count countA = number of 'A' seen so far.
Every time you see a 'G', all previously seen 'A' can pair with this 'G' to form an "AG" subsequence → add countA to the answer.
Take modulo at each addition.

Complexity:

Time: O(n)
Space: O(1)
*/
    public static void main(String[] args){
       String A = "ABCGAG";
    //    String A = "GAB";
       System.out.println(solve(A));
    }

    public static int solve(String A) {
        long MOD = 1_000_000_007L;
        long countA = 0;
        long ans = 0;
        for (int k = 0; k < A.length(); k++) {
            char c = A.charAt(k);
            if (c == 'A') {
                countA = (countA + 1) % MOD;
            } else if (c == 'G') {
                ans = (ans + countA) % MOD;
            }
        }
        return (int)ans;


    }
}
