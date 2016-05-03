//reverse a string recursively

var reverseString = function(s){
    var newStr = "";
    var count = s.length-1
    function recurse(letter){
        if(count < 0){
            return newStr
        }
        newStr += letter
        count--
        letter = s.charAt(count)
        recurse(letter)
        
    }
    recurse(s.charAt(s.length-1))
    return newStr
}