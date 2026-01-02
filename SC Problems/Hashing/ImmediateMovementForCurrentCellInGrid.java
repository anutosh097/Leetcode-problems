import java.util.*;

public class ImmediateMovementForCurrentCellInGrid{
    /**
     * 
     * Only left,right,up and down movements are allowed for each cell,only traversal 
     * along 0's in grid are alowed and 1s are blocks which prohibits movement.
     * Return all the possible number of immediate movements in the grid given a 
     * specific cell in the grid
    */
    public static void main(String[] args){
        int[][] grid = {
            {0,1,0,0,0},
            {1,0,1,0,0},
            {0,1,0,0,0},
            {0,0,0,0,0}
        };
        int[] currentCoordinate = {0,4};  // 2
        // int[] currentCoordinate = {1,1}; // 0
        // int[] currentCoordinate = {2,3}; // 4

        int res = allowedMovement(grid,currentCoordinate[0],currentCoordinate[1]);
        System.out.println(res);
    }

    public static int allowedMovement(int[][] grid,int r,int c){
      List<List<Integer>> moves = new ArrayList<>();
      int[][] directionsAllowed = {
        {1,0}, // down
        {-1,0}, // up
        {0,-1},  // left
        {0,1}  // right
        /**
         * If diagonal movements are also allowed, then
         * directions array can be extended to [1,1],[-1,-1],[1,-1],[-1,1]
         * for four diagonal directions
         */
      }; 

      for(int[] direction: directionsAllowed){
          int newRow = r + direction[0];
          int newCol = c + direction[1];
          if(isValid(grid,newRow,newCol)){
            moves.add(Arrays.asList(newRow,newCol));
          }
      }

      return moves.size();
    }


    public static boolean isValid(int[][] grid,int newR,int newC){
      return 0 <= newR && newR < grid.length && 0 <= newC && newC < grid[0].length && grid[newR][newC] != 1;
    }
}