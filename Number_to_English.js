//Number to English

//Write a function numberToEnglish, it should take a number and return the number as a string using English words.

function numberToEnglish (number) {
 var result;
 var number = number.valueOf();
 if(numbersToWords[number]){
   result = numbersToWords[number];
 }
 else if(number < 100){
  var  numberPlace = Math.floor(number/10);
  var  numberLeft = number % 10;
   result = numbersToWords[numberPlace * 10] + "-" + numberToEnglish(numberLeft);
 }
 else {
   if(number < 1000) {
    var  place = 100;
   }
   else {
     place = 1000;
     while (place * 1000 <= number) {
       place *= 1000
     }
   }
   numberPlace = Math.floor(number/place);
   numberLeft = number % place;
   result = numberToEnglish(numberPlace) + " " + numbersToPlace[place];
  var remainder = numberToEnglish(numberLeft);
   if(remainder !== 'zero'){
     result += " " + remainder;
    }
   }
   return result;
};
