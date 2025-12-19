import java.util.*;

public class ValidSudoku {
    public static void main(String[] args) {
        String[] input = {"53..7....", "6..195...", ".98....6.", "8...6...3", "4..8.3..1", "7...2...6", ".6....28.", "...419..5", "....8..79"};
        isValidSudoku(input);
    }

        public static  int isValidSudoku(final String[] A) {
            List<Set<Character>> rows = new ArrayList<Set<Character>>(9);
            List<Set<Character>> cols = new ArrayList<Set<Character>>(9);

            for (int k = 0; k < 9; k++) {
                rows.add(new HashSet<>());
                cols.add(new HashSet<>());
            }


            List<List<Set<Character>>> subgrids = new ArrayList<>(3);

            for (int i = 0; i < 3; i++) {
                List<Set<Character>> row = new ArrayList<>(3);
                for (int j = 0; j < 3; j++) {
                    row.add(new HashSet<>());
                }
                subgrids.add(row);
            }

            for(int i =0; i < 9;i++){
                for(int j = 0; j < 9; j++){
                    char ch = A[i].charAt(j);
//                    System.out.println(ch);
                    if(ch == '.') continue;

                    if(rows.get(i).contains(ch)){
                        return 0;
                    }
                    if(cols.get(j).contains(ch)){
                        return 0;
                    }
                    if(subgrids.get(i / 3).get(j / 3).contains(ch)){
                        return 0;
                    }
                    rows.get(i).add(ch);
                    cols.get(j).add(ch);
                    subgrids.get(i/3).get(j/3).add(ch);
                }
            }
            return 1;
        }


}
