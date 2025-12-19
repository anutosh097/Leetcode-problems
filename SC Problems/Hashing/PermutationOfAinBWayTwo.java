public class PermutationOfAinBWayTwo {
        public static void main(String[] args) {
            String A= "abc";
            String B= "abcbacabc";

            String C = "aca";
            String D= "acaa";

            System.out.println(permOfAinB(A,B));
            System.out.println(permOfAinB(C,D));
        }

        public static int permOfAinB(String A,String B){
            int Alen = A.length();
            int Blen = B.length();

            int[] freqA = new int[26];
            int[] freqB = new int[26];

            for(int i=0;i < Alen;i++){
                int ch = A.charAt(i);
                freqA[ch - 'a']++;
            }

            for(int j = 0; j < Alen;j++){
                int eachCh = B.charAt(j);
                freqB[eachCh - 'a']++;
            }

            int counter = 0;

            /**
             * The below is the execution of sliding window technique with boosters and optimizations
             * as here we don't just slide the window with two pointers but we also maintain the frequency
             * array for both the strings and just compare them at each step to check if they are permutations
             * of each other.
             * 
             * We don't compare the substrings directly which would have taken O(N) time at each step but here
             * we are just comparing two frequency arrays of fixed size 26 (for lowercase letters) which takes O(1) time.
             * Also, we update the frequency array for string B in O(1) time as we slide the window by removing the count
             * of the character that goes out of the window and adding the count of the character that comes into the window.
             */
            int k = Alen;
            while(k < Blen){
                if(isPermut(freqA,freqB)){
                    counter++;
                }
//                System.out.println(k-'a');
//                System.out.println(Alen-k-'a');
                freqB[B.charAt(k - Alen)-'a']--;
                freqB[B.charAt(k)-'a']++;
                k++;
            }

            if(isPermut(freqA,freqB)){
                counter++;
            }

            return counter;
        }

        public static boolean isPermut(int[] frA,int[] frB){
            for(char c='a';c <= 'z';c++){
                if(frA[c-'a'] != frB[c-'a']){
                   return false;
                }
            }
            return true;
        }
}
