//Highest Frequency

// Given a string of only lowercase alphabet characters, find the character that occurs the highest number of times. If any characters tie, return them all in alphabetical order.

function highestFreq (str) {
  //initialize result array
  //initialize empty object
  //for each char in string
    //add to object
      //if already in object
        //incremenet val
      //else
        //add with a val of 0
  //push all values into an array and sort
  //isolate last element in array as highest freq
  //loop through object to find all chars that have that value
  //push to result array
  //sort result array
  //return as a string

  var result = [];
  var store = {};
  for (var i = 0; i < str.length; i++){
    if(store[str[i]]){
      store[str[i]]+=1;
    }
    else {
      store[str[i]] = 1;
    }
  }
  var temp = [];
  for(var key in store){
    temp.push(store[key]);
  }
  temp = temp.sort();
  var highest = temp[temp.length-1];
  for(var prop in store){
    if(store[prop] === highest){
      result.push(prop);
    }
  }
  result = result.sort();
  return result.join("");
}
