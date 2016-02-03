// Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

function allAnagrams (string) {
  // Write your code here, and
  // return your final answer.
  var results = [];
  var temp = [];
  var final = []
  var newString = string.split("")
  var sorted = newString.sort();
  var length = string.length
  
  //recurse to generate all possible permutations that are the same length of 
  //our input string
  function recurse(perm){
    if(perm.length === length){
      temp.push(perm);
      return;
    }
    
  for(var i = 0; i < newString.length; i++){
    var currLetter = newString[i];
    recurse(perm.concat(currLetter));
    }
  } 
  recurse([]);
  
  //make sure we are using all the characters in the given string - no dupes
  for(var j = 0; j < temp.length; j++){
    var copy = temp[j].slice();
    var currArray = copy.sort().toString()
    if(currArray === sorted.toString()){
      results.push(temp[j])
    }
  }
  
  //return an array with no dupes
  var uniques = unique(results, [].join);
  
  //convert to strings
  for (var k = 0; k < uniques.length; k++){
    final.push(uniques[k].join(""))
  }
  return final
}

//helper function to delete dupes from a two-dimensional array
var unique = function(items, key) {
    var set = {};
    return items.filter(function(item) {
        var k = key ? key.apply(item) : item;
        return k in set ? false : set[k] = true;
    })
}
