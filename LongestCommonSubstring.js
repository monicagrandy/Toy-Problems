//Given an array of words, find the longest common substring between two words and the length of that substring

substrings = function(string){
  var results = [];
  for(var i = 0; i < string.length; i++){
    var currLetter = string.charAt(i);
    for(var j = 0; j < string.length; j++){
      var nextLetter = string.charAt(j);
      var substr = string.substring(i, j+1);
      if(substr !== ""){
        results.push(substr);
      }

    }
  }
  return results;
};

commonSubstrings = function(string1, string2){
  var subs1 = substrings(string1);
  var subs2 = substrings(string2);
  var longer = subs2;
  var shorter = subs1;
  if(subs1.length > subs2.length){
    longer = subs1;
    shorter = subs2;
  }
  var length = 0;
  var longestSub;
  for(var i = 0; i < shorter.length; i++){
    if(longer.includes(shorter[i])){
      if(shorter[i].length > length){
        length = shorter[i].length;
        longestSub = shorter[i];
      }
    } 
  }
  return longestSub;
};

commonStrings = function(array){
  var store = {};
  for(var i = 0; i < array.length; i++){
    var currentString = array[i];
    for(var j = 0; j < array.length; j++){
      if(array[i] !== array[j]){
        var key = JSON.stringify([array[i], array[j]]);
        store[key] = commonSubstrings(array[i], array[j]);
      } 
    }
  }
  var keys = Object.keys(store);
  var max = 0;
  var longestWord;
  keys.forEach(function(key){
    if(store[key]){
      var currWord = store[key];
      var currLen = store[key].length;
      if(currLen > max){
        max = currLen;
        longestWord = currWord;
      }
    } 
  });
  return {
    longestWord: longestWord,
    length: max   
  };
};
