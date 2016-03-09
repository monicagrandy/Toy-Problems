// Implement a function that sorts an array of numbers using the “mergesort” algorithm.

// Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N as a set of N “sublists” of length 1, which are considered to be sorted. Adjacent sublists are then “merged” into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
// after the first merge, and so on.)

// This can be implemented using either a recursive (“top-down”) or an iterative (“bottom-up”) approach.

function mergeSort(arr){
 //return array if there is only one element
 if(arr.length < 2){
   return arr
 }
 //get midpoint of array
 var mid = Math.floor(arr.length/2)
 //initialize left subArray and call merge sort to sort each side
 var left = mergeSort(arr.slice(0,mid));
 //console.log(left);
 //initialize right subArray and call merge sort to sort each side
 var right = mergeSort(arr.slice(mid));
 //console.log(right);
 //call helper function on left and right portions
  return mergeHelper(left, right);
}

//helper function for merging arrays
function mergeHelper(sub1, sub2){
  //console.log("++line 21 sub1 = " + sub1)
  //console.log("++line 22 sub1 = " + sub2)
  //store final result
  var results = [];
  //while we still have elements in both arrays
  while(sub1.length > 0 && sub2.length > 0){
    //if the first el of the first array is less than the first el of the second array
    if(sub1[0] < sub2[0]){
      //push it to results
      results.push(sub1[0])
      sub1 = sub1.slice(1)
    }
    else {
      //otherwise push the other el
      results.push(sub2[0])
      sub2 = sub2.slice(1)
    }
  }
  //we still have elements in our left array
  if(sub1.length){
    //console.log("++line 39: " + results.concat(sub1))
    //go back up to line 15
   return results.concat(sub1)
  }
  else {
    //console.log("++line 43: " + results.concat(sub2))
    //go back up to line 15
    return results.concat(sub2)
  }
}