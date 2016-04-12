// //Sudoku Checker
//
// Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.
//
// A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.
// More information here.
//
// (!!!) NOTICE: Newline characters in the inputs have been replaced with <br /> tags to make the value easier to read. In other words, when you see a break, it's actually a
//
// \n
// character. Check your console when submitting to see the input for yourself.

function sudokuCheck (boardStr) {
  var sudStr = [1,2,3,4,5,6,7,8,9];

  var solved = 'solved';
  var invalid = 'invalid';

  var boardMtrx = boardMaker(boardStr);
  console.log("board = " + boardMtrx);
  //check all rows
  for(var i = 0; i < boardMtrx.length; i++){
    var sorted = boardMtrx[i].slice().sort();
    console.log("sortedArray = " + sorted);
    console.log("sudStr = " + sudStr);
    if(arrayMatcher(sorted, sudStr) === false){
      return invalid;
    }
  }

  //check all cols
  for(var i = 0 ; i < boardMtrx.length; i++){
    var temp =[];
    for(var j = 0; j < boardMtrx[i].length; j++){
      console.log("line 23 " + boardMtrx[j][i]);
      temp.push(boardMtrx[j][i]);
      if(temp.length === 9){
        var sorted = temp.slice().sort();
        if(arrayMatcher(sorted, sudStr) === false){
          return invalid;
        }
        else {
          temp = [];
        }
      }
    }
  }

  //check all squares
  var boxes = boxMaker(boardMtrx);
  for(var i = 0; i < boxes.length; i++){
    var sorted = boxes[i].slice().sort()
     if(arrayMatcher(sorted, sudStr) === false){
          return invalid;
        }
    }

  return solved;
}


function boardMaker(str){
  str = str.split("/n").join("").split("");
  var board = [];
  var newArr = [];
 //create matrix from boardStr
  for(var i = 0; i < str.length; i++){
    var num = parseInt(str[i]);
    if(!isNaN(num)){
      newArr.push(num);
      if(newArr.length === 9){
        board.push(newArr);
        newArr = [];
      }
    }
  }
  return board;
}

function boxMaker(board) {
  var size = Math.sqrt(board.length),
  boxes = [];
  for(var r = 0, rl = board.length ; r < rl ; r++) {
    var row = board[r];
    for(var c = 0, cl = row.length ; c < cl ; c++) {
      var box = (r / size | 0) * size + (c / size | 0);
      boxes[box] || (boxes[box] = []);
      boxes[box].push(row[c]);
    }
  }

  return boxes;
}


function arrayMatcher(arr1, arr2){
  for(var i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}
