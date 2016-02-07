// Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

// Your function should return the common characters in the same order that they appear in the first argument. Do not return duplicate characters and ignore whitespace in your returned string.

// Example: commonCharacters('acexivou', 'aegihobu')

// Returns: 'aeiou'

commonCharacters = function(string1, string2){

//initialize results
var results = [];
//turn the strings into arrays
var array1 = string1.split("")
var array2 = string2.split("")
//iterate over one
for(var i = 0; i < array1.length; i++){
  //check if it exists in the other and check for dupes
  if(array2.indexOf(array1[i])!= -1 && results.indexOf(array1[i])===-1 
  && array1[i] != " "){
    //if it does, add it to results array
    results.push(array1[i]);
  }
}

//return results array as a string and return an empty string if undefined
return results.join("") || ""
};

