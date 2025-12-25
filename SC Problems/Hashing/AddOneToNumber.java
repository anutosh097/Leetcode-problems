/**
 * 
 * Problem Description

Given a non-negative number represented as an array of digits, add 1 to the number ( increment the number represented by the digits ).






The digits are stored such that the most significant digit is at the head of the list.

NOTE: Certain things are intentionally left unclear in this question which you should practice asking the interviewer. For example: for this problem, the following are some good questions to ask :

Q: Can the input have 0's before the most significant digit. Or, in other words, is 0 1 2 3 a valid input?
A: For the purpose of this question, YES
Q: Can the output have 0's before the most significant digit? Or, in other words, is 0 1 2 4 a valid output?
A: For the purpose of this question, NO. Even if the input has zeroes before the most significant digit.







Problem Constraints

1 <= size of the array <= 1000000



Input Format

First argument is an array of digits.



Output Format

Return the array of digits after adding one.



Example Input

Input 1:

[1, 2, 3]


Example Output

Output 1:

[1, 2, 4]


Example Explanation

Explanation 1:

Given vector is [1, 2, 3].
The returned vector should be [1, 2, 4] as 123 + 1 = 124.
 */

public class AddOneToNumber {

    public static void main(String[] args){
        System.out.println(Arrays.toString(plusOne(new int[]{0, 1, 2, 3})));// [1, 2, 4]
        //  System.out.println(Arrays.toString(plusOne(new int[]{0, 0, 9, 9}))); // [1, 0, 0] 
         // System.out.println(Arrays.toString(plusOne(new int[]{9, 9, 9})))// [1, 0, 0, 0] 
         // System.out.println(Arrays.toString(plusOne(new int[]{0, 0, 0})));
    }

    public int[] plusOne(int[] A) {
        int n = A.length;

        // Step 1: Find first non-zero index
        int start = 0;
        while (start < n && A[start] == 0) {
            start++;
        }

        // If all digits were zero, return [1]
        if (start == n) {
            return new int[]{1};
        }

        // Step 2: Add one starting from the last digit
        int carry = 1;
        for (int i = n - 1; i >= start; i--) {
            int sum = A[i] + carry;
            A[i] = sum % 10;
            carry = sum / 10;
        }

        // Step 3: If carry remains, create new array
        if (carry > 0) {
            int[] result = new int[n - start + 1];
            result[0] = carry;
            // Copy digits manually
            for (int i = start, j = 1; i < n; i++, j++) {
                result[j] = A[i];
            }
            return result;
        }

        // Step 4: Build result without leading zeroes
        int[] result = new int[n - start];
        for (int i = start, j = 0; i < n; i++, j++) {
            result[j] = A[i];
        }
        return result;

    }
}
