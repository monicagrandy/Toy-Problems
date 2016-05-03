//Write a function that takes a string as input and reverse only the vowels of a string.

var reverseVowels = function(s) {
    var vowels = {
        a: "a",
        A: "A",
        e: "e",
        E: "E",
        i: "i",
        I: "I",
        o: "o",
        O: "O",
        u: "u",
        U: "U"
    }
    var array = s.split("")
    var length = array.length
    var store = new Array(length), i,j
    for(i = 0; i < length; i++){
       if(vowels[array[i]]){
           store.push(array[i])
           array[i] = "vowel"
       }
    }
    for(j = 0; j < length; j++){
        if(array[j]==="vowel"){
            array[j] = store.pop()
        }    
    }
    return array.join("")
};