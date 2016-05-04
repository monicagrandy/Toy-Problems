// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.


 var isBalanced = function(root){
    function recurse(node){
        if(node === null){
            console.log("node is null")
            return true
        }
        console.log("curr node = ", node.val)
        var left = height(node.left)
        console.log("left height: ", left)
        var right = height(node.right)
         console.log("right height: ", right)
    
        if(Math.abs(left-right)<=1 && recurse(node.left)&&recurse(node.right)){
            console.log("tree is balanced")
            return true
            }
        console.log("tree is unbalanced")    
        return false    
    }
    return recurse(root)
 }
 
 var height = function(node){
    if (node === null) {
        return 0;
    }
    return 1 + Math.max(height(node.left), height(node.right));
 }