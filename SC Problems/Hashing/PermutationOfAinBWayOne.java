import java.util.Arrays;

public class PermutationOfAinBWayOne {
    public static void main(String[] args) {
        String A= "abc";
        String B= "abcbacabc";

        String C = "aca";
        String D= "acaa";

        System.out.println(permOfAinB(A,B));
        System.out.println(permOfAinB(C,D));
    }

    public static int permOfAinB(String A,String B){
       int counter = 0;

       int strFirst = A.length();
       int strSecond = B.length();
       //Sliding window pointer One range
       int it = 0;
       int last = strSecond-strFirst;
       //Sliding window pointer Two range
        int rt = it + strFirst;


       while(it <= last && rt <= strSecond){
           if(isPermute(A,B,it,rt)){
              counter++;
           }
           it++;
           rt++;
       }

       return counter;
    }

    public static boolean isPermute(String A,String B,int it,int rt){
        // Initialise a 26 size int array as all characters belongs to lowercase as per question
        int[] hash = new int[26];
        for(int i = 0; i < A.length();i++){
            int ch = A.charAt(i);
            hash[ch - 'a']++;
        }

        for(int j = it; j < rt;j++){
            int eachCh = B.charAt(j);
            hash[eachCh-'a']--;


            if(hash[eachCh - 'a'] < 0) return false;
        }
        return true;
    }
}
