//Spiral Traversal

// Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
// and prints out every value found, but in a spiral from the upper left in to the center.

function spiralTraversal (matrix) {
  var final = [];
  var minRowIdx = 0;
  var minColIdx = 0;
  var maxRowIdx = matrix.length-1;
  var maxColIdx = matrix[0].length-1;
  var original = [];
  for(var i = 0; i < matrix.length; i++){
    for (var j = 0; j < matrix[i].length; j++){
      original.push(matrix[i][j]);
    }
  }
  console.log(original);
  var length = original.length;
  while(minRowIdx <= maxRowIdx && minColIdx <= maxColIdx){
    for(var i = minColIdx; i <= maxColIdx; i++){
      if(final.length < length){
        final.push(matrix[minRowIdx][i]);
      }
    }
    minRowIdx++;
    for(var j = minRowIdx; j <= maxRowIdx; j++){
      if(final.length < length){
        final.push(matrix[j][maxColIdx]);
      }
    }
    maxColIdx--;
    for(var k = maxColIdx; k >= minColIdx; k--){
      if(final.length < length){
        final.push(matrix[maxRowIdx][k]);
      }
    }
    maxRowIdx--;
    for(var l = maxRowIdx; l >= minRowIdx; l--){
      if(final.length < length){
        final.push(matrix[l][minColIdx]);
      }
    }
    minColIdx++;
  }
  return final;
}
