// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

// For example,
// Given [100, 4, 200, 1, 3, 2],
// The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

// Your algorithm should run in O(n) complexity.

var longestConsecutive = function(nums) {
   nums = nums.sort(function(a,b) {
       return a-b;
   });

   var highest = 0;
   var count = 1;
   if(nums.length === 1) {
       return 1;
   }
   
   for(var i = 1; i < nums.length; i++) {
       if(Math.abs(nums[i] - nums[i-1]) === 1) {
           count++;
           if(count > highest) {
               highest = count;
           }
       } else if(nums[i]-nums[i-1] === 0) {
         continue;
       } else {
         count = 1;
       } 
   }
   
   return Math.max(highest || count);
} 
