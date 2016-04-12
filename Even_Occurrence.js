//Even Occurrence

//Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

function evenOccurrence (arr) {
 //input: array
 //output: element || null
 //for each element in the array
  //count the number of times it occurs
  //if that number is even and it's the first time we are seeing it in the array
    //immediately return
  //otherwise keep going

  for(var i = 0; i <= arr.length; i++){
    var count = 0;
    var curr = arr[i];
    for(var j = i; j <= arr.length; j++){
      if(arr[j] === curr){
        count+=1;
      }
    }
    if (count % 2 === 0 && arr.indexOf(curr) === i){
      return curr;
    }
  }
  return null;
}
