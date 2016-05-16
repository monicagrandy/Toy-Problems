// Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

var containsDuplicate = function(nums) {
    var store = {}
    if(!nums.length){
        return false
    }
    for(var i = 0; i < nums.length; i++){
        if(!store[nums[i]]){
            store[nums[i]] = true
        }
        else {
            return true
        }
    }
    return false
};