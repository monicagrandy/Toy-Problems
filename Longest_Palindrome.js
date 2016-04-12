//Longest Palindrome

//Implement a function that finds the longest palindrome in a given string. For example, in the string “My dad is a racecar athlete”, the longest palindrome is “a racecar a”. Count whitespaces as valid characters. Other palindromes in the above string include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).

function longestPalindrome (string) {
  var longest = '';
  for(var i = 0; i < string.length; i++){
    for(var j = i; j < string.length; j++){
      var sub = string.slice(i, j+1);
      console.log(sub);
      if(isPalindrome(sub) && sub.length > longest.length){
        longest = sub;
      }
    }
  }
  return longest;
}


function isPalindrome(str){
  if (str === str.split('').reverse().join('')){
    return true;
  }
  return false;
}
