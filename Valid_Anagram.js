//Given two strings s and t, write a function to determine if t is an anagram of s.
// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.

// Note:
// You may assume the string contains only lowercase alphabets.

var isAnagram = function(s, t) {
    if(!s || !t){
        return true
    }
    if(s.length !== t.length){
        return false
    }
    var sLetters = s.split("").sort()

    var tLetters = t.split("").sort()
    for(var i = 0; i < s.length; i++){
        if(sLetters[i] !== tLetters[i]){
            return false
        }
    }
    return true
};