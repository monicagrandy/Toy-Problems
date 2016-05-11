// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// For example,
// Given nums = [0, 1, 3] return 2.

var missingNumber = function(nums) {
    nums = nums.sort(function(a,b){
        return a-b
    })
    
    if(nums[0] !== 0){
        return 0
    }
    
    var numbers = {}
    for(var i = 0; i < nums.length; i++){
        if(!numbers[nums[i]]){
            numbers[nums[i]] = true
        }
    }
    
    for(var j = 0; j <= nums.length; j++){
        if(!numbers[j]){
            var missing = j
            break;
        }
    }
    return missing || max+1
};