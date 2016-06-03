//check if a string anagram is a palindrome

function couldBePalindrome(string){
  var store = {}
  var oddCount = 0
  for(var i = 0; i < string.length; i++){
    if(string.charAt(i) !== " "){
      if(!store[string.charAt(i)]){
      store[string.charAt(i)] = 1
    }
    else {
      store[string.charAt(i)]++
      }
    }  
  }
  console.log(store)
  for(var key in store){
    if(store[key] % 2 !== 0){
      oddCount++
    }
  }
  return oddCount < 2
}