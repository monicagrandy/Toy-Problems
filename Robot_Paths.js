// A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. The robot can move either up, down, left, or right, but cannot visit the same spot twice. How many possible unique paths are there to the bottom right corner?

// Make your solution work for a grid of any size.

function robotPaths (n) {
  //initialize board
  var board = makeBoard(n);
  //store our result count
  var total = 0;
  
  //create recursive function to check where we have already placed the robot
  function recurse(row, col){
    if(row === n-1 && col=== n-1){
      total++;
      return
    }
    
    //check if current space has been visited and if it is in bounds
    if(row < 0 || row >= n || col < 0 || col >= n || board.hasBeenVisited(row,col)){
        //if it has, then we can't keep going on the same path
        return
    }
    //toggle piece
    board.togglePiece(row,col)  
    //recurse in all directions
    recurse(row+1, col);
    recurse(row-1, col);
    recurse(row, col+1);
    recurse(row, col-1);
    //toggle the piece at the current row and col
    board.togglePiece(row, col);
  }
  recurse(0,0)
  return total
}