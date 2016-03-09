// Write a function that takes a number as its argument and returns a string that represents that number’s simplified fraction.
// Whole numbers and mixed fractions should be returned as improper fractions.

function fractionConverter (number) {
  //initialize result var
  var result;
  //is the input 0?
  if(number === 0){
    return "0/1"
  }
  //check for negative edgecases
  var isNegative = number < 0 ? true : false;
  number = Math.abs(number);
  //turn number into a string so we can iterate and/or get its length 
  var string = number.toString()
  var top;
  //is our number less than 1?
  if(number < 1){
  //convert to a whole number
    for(var i = 0; i < string.length; i++){
      if(string[i] === "."){
        top =  string.slice(i+1);
      }
    }
  //find out how many digits are in top
  var length = top.length 
  //set another var to equal 10 to the power of of length
  var bottom = Math.pow(10, length);
  }
  //if number is greater than or equal to 1
  if(number >= 1) {
   //convert top to a whole number (as a string)    
   top = number * Math.pow(10, string.length);
    //set another var to equal 10 to the power of the length of our string
   var bottom = Math.pow(10, string.length);
   }
  //call divisor function to get lcd of top and bottom vals 
  var greatestCommonDenomonator = divisor(top, bottom);
  //divide top by lcd
  var top = top/greatestCommonDenomonator
  //divide bottom by lcd
  var bottom = bottom/greatestCommonDenomonator
  //set result equal to a stringified fraction
  result = top + "/" + bottom
  //check to see if number started as negative
  if(isNegative){
    //if so prepend "-"
    return "-" + result
    }
  return result
  }
  
//helper function to find largest common denomonator
function divisor(a, b) {
  a = parseInt(a)
    if (b) {
        return divisor(b, a % b);
    } else {
        return Math.abs(a);
    }
}