// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

var intersect = function(nums1, nums2) {
    var obj1 = {}
    var obj2 = {}
    var intersect = []
    nums1.forEach(function(el){
        if(!obj1[el]){
            obj1[el] = 1
        }
        else {
            obj1[el]++
        }
    })
    nums2.forEach(function(el){
        if(!obj2[el]){
            obj2[el] = 1
        }
        else {
            obj2[el]++
        }
    })
    for(var prop in obj1){
        if(obj2[prop]){
            var min = Math.min(obj1[prop],obj2[prop])
            while (min > 0){
                intersect.push(Number(prop))
                min--
            }
        }
    }
    return intersect
};