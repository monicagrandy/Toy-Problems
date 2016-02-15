// Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.

// Make sure your code does the following:

// All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
// Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
// Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’. See the result below.

function powerSet(string) {
  var arr = string.split("");
  var sortedArr = arr.sort();
  var combos = [[]];
  var result = [];
  //get rid of dupes
  var noDupes = uniq(sortedArr);
  
  for(var i = 0; i < noDupes.length; i++){
    var length = combos.length;
    for(var j = 0; j < length; j++){
      console.log()
      combos.push(combos[j].concat(noDupes[i]));
    }
  }
  for(var k = 0; k < combos.length; k++){
    var set = combos[k].join("");
    result.push(set);
  }
  return result.sort();
}


//underscore helpers

var indexOf = function(array, target){
  var result = -1;
  
  array.forEach(function(el, index){
    if(el === target && result === -1){
      result = index
    }
  })
  return result;
}
  
var uniq = function(array) {
    var results = [];
    array.forEach(function(currentEl){
      if (indexOf(results, currentEl) === - 1)
      {
        results.push(currentEl);
      }
    });
    return results;
  };  
