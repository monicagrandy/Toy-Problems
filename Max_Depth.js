// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

var maxDepth = function(root) {
    if(root === null){
        return 0;
    } 
    var left = maxDepth(root.left);
    var right = maxDepth(root.right);
    if(left > right){
        return left + 1
    }
    else {
        return right +1
    }
};