// Write a function that rotates a NxN matrix 90 degrees clockwise.
// A matrix, also called a 2-D array, is simply an array of arrays of values.

function rotateMatrix (matrix) {
  //input: 2 dimensional array
  //intitialize variable to store our result
  var rotated = []
  
  //loop through the rows and columns
  for(var row = 0; row < matrix.length; row++){
    rotated.push([]);
    for(var col = 0; col < matrix[row].length; col++){
      rotated[row].push(matrix[col][row])
    }
    rotated[row]  = rotated[row].reverse()
  }
   
  
  //output: 2 dimensional array
  return rotated
}
