// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// For example,
// "A man, a plan, a canal: Panama" is a palindrome.
// "race a car" is not a palindrome.

var isPalindrome = function(s) {
    if(s === " "){
        return true
    }
    var store = []
    var letterNumber = /^[0-9a-zA-Z]+$/;
    for(var i = 0; i < s.length; i++){
        if(s.charAt(i).match(letterNumber)){
            var curr = s.charAt(i).toLowerCase()
            store.push(curr)
        }
    }
    if(!store.length || store.length === 1){
        return true
    }
    var pal1 = store.join("")
    var pal2 = store.reverse().join("")
    return pal1 === pal2
};