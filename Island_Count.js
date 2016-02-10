// Given a string representation of a 2d map, return the number of islands in the map. Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces are considered connected if they are adjacent (but not diagonal).

// (!!!) NOTICE: Newline characters in the inputs have been replaced with <br /> tags to make the value easier to read. In other words, when you see a break, it's actually a

// \n
// character. Check your console when submitting to see the input for yourself.

function countIslands (mapStr) {
  var islandCount = 0;
  var strings = [];
  var row = [];
  for(var i = 0; i <= mapStr.length; i++){
    if(mapStr[i] === "\n" || mapStr[i] === undefined){
      strings.push(row);
      row = [];
    }
    else {
      row.push(mapStr[i]);
    }
  }
  var recurse = function(x, y) {
  //check every index
  //above  
  if(strings[x+1] && strings[x+1][y] === "0"){
    strings[x+1][y] = "."
    recurse(x+1, y);
  }
  //below
  if(strings[x-1] && strings[x-1][y] === "0"){
    strings[x-1][y] = "."
    recurse(x-1, y)
  }
  //right
   if(strings[x][y+1] && strings[x][y+1] === "0"){
    strings[x][y+1] = "."
    recurse(x, y+1)
  }
  //left
   if(strings[x][y-1] && strings[x][y-1] === "0"){
   strings[x][y-1] = "."
   recurse(x, y-1)
  }
}
      
  for(var subArray = 0; subArray < strings.length; subArray++) {
    for(var element = 0; element < strings[subArray].length; element++) {
      if(strings[subArray][element] === "0"){
        islandCount+=1;
        strings[subArray][element] = ".";
        recurse(subArray, element);
      }
    }
  }
 return islandCount;
}
