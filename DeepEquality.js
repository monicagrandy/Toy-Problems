// Write a function that, given two objects, returns whether or not the two are deeply equivalent–meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.

// DO NOT use JSON.stringify.

deepEquals = function(a, b){

//edge case for strings
if (typeof a === 'string' && typeof b === "string") {
  if (a === b) {
    return true;
  }
  return false;
}

//base case
if (a === b) {
  return true;
}

//set up counters to track how many keys are in each object
var aCount = 0;
var bCount = 0;

for(var prop in a){
  aCount+=1;
}

for(var prop in b){
  bCount+=1;
}

//recurse if the objects have the same ammount of keys
if(aCount === bCount){
  return deepEquals(a[prop], b[prop])
}


return false;
};  