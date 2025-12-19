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
