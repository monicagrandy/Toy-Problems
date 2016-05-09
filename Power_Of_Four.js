// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

var isPowerOfFour = function(num) {
  while(num % 4 === 0 && num !== 0){
    num = num/4
  }
  return num === 1
};