// Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'.

function firstNonRepeatedCharacter(string) {
 
 for(var i = 0; i < string.length; i++){
   var curr = string.charAt(i);
   if(string.indexOf(curr)===i){
     if(string.indexOf(curr, i+1) === -1){
     return curr
   }
  }
 }
 return "sorry"
}
