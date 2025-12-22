import java.util.*;
/*

Why parallel two pointers isn’t the first choice here
The classic two-pointer pattern shines with comparisons between two sorted structures (merge, intersection, sum targets, etc.).
Here, we’re counting ordered pairs within a single sequence based on positions; the prefix count captures this more directly and with O(1) space.
A two-pointer approach would require constructing two arrays of indices and then counting cross-array pairs, which is equivalent but more work.
Complexity:

Time: O(n)
Space: O(n)

*/


public class SpecialSubsequencesAGWayTwo {

    public static void main(String[] args){
        String A = "ABCGAG";
        //  String A = "GAB";
       System.out.println(solve(A));
    }

    public static int solve(String A) {
        List<Integer> posA = new ArrayList<>();
        List<Integer> posG = new ArrayList<>();
        for (int i = 0; i < A.length(); i++) {
            if (A.charAt(i) == 'A') posA.add(i);
            else if (A.charAt(i) == 'G') posG.add(i);
        }
        long ans = 0, MOD = 1_000_000_007L;
        int i = 0, j = 0;
        while (i < posA.size() && j < posG.size()) {
            if (posA.get(i) < posG.get(j)) {
                ans = (ans + (posG.size() - j)) % MOD;
                i++;
            } else {
                j++; // move G forward to find one after A[i]
            }
        }
        return (int)ans;

    }
}
        