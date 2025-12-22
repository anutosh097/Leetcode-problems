public class LengthOfLongestConsecutiveOnes {
    public static void main(String[] args){
       String A = "111011101";
       System.out.println(solve(A));
    }

    public static int solve(String A) {
        /*
          Main pattern used is "prefix/suffix run length pattern" with two arrays for left and right count of 1s between zeroes
          and a global counter totalOnes for total count of 1s
          TC - O(N)
          SC - O(N)
        */
        int n = A.length();
        int totalOnes = 0;
        for (int k = 0; k < n; k++) if (A.charAt(k) == '1') totalOnes++;
        // edge cases
        if (totalOnes == n) return n;            // no zeros
        if (totalOnes == 0) return 0;            // all zeros

        // Precompute L[i]: ones ending at i, R[i]: ones starting at i
        int[] L = new int[n];
        int[] R = new int[n];

        // L
        int run = 0;
        for (int i = 0; i < n; i++) {
            if (A.charAt(i) == '1') run++;
            else run = 0;
            L[i] = run;
        }
        // System.out.println(Arrays.toString(L));

        // R
        run = 0;
        for (int i = n - 1; i >= 0; i--) {
            if (A.charAt(i) == '1') run++;
            else run = 0;
            R[i] = run;
        }
        // System.out.println(Arrays.toString(R));


        int ans = 0;

        // Consider each zero as bridge
        for (int i = 0; i < n; i++) {
            if (A.charAt(i) == '0') {
                int left = (i > 0) ? L[i - 1] : 0;
                int right = (i + 1 < n) ? R[i + 1] : 0;
                int combined = left + right;
                // We can bring in one extra '1' only if there are more ones elsewhere than combined
                int candidate = combined + ((combined < totalOnes) ? 1 : 0);
                ans = Math.max(ans, candidate);
            }
        }

        return ans;
    }
}
