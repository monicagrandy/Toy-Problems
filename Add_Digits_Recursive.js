// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
//
// For example:
//
// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

var addDigits = function(num) {
    //turn number into string then into array
    if(num < 10){
        return num;
    }
    var numArr = num.toString().split("");
    //call reduce on the array and add number together
    var sum = numArr.reduce(function(a,b){
        return parseInt(a) + parseInt(b);
    });
    //otherwise pass it back through addDigits
    return addDigits(sum);
};
