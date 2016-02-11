// Given a string, return true if it contains balanced parenthesis ().


function isBalanced (string) {
  //make left parens array
  var left = [];
  //make right parens array
  var right = [];
  //iterate through the string
  for(var i = 0; i < string.length; i++){
    console.log(string[i]);
     //if left parens
     if(string[i]===")" && right.length > 0){
        //push to left parens array
        left.push(string[i]);
     }
    //if right parens
    if(string[i]==="("){
      //push to right parens array
      right.push(string[i]);
    }
  }
    //if no parens
    if(left.length === 0 && right.length === 0){
      //return true
      return true;
    }
    console.log("left: " + left);
    console.log("right: " + left);
   //compare if lengths are equal
  //return boolean
  return left.length === right.length;
}
