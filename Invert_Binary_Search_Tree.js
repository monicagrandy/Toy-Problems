//inverts a binary search tree

//Runtime: 144 ms

var invertTree = function(root) {
    function recurse(node) {
        if (node){
        if(node.left === null && node.right === null){
            return;
        }
      var temp;
        temp = node.left;
        node.left = node.right;
        node.right = temp;
        if(node.left){
            recurse(node.left);
        }
        if(node.right){
            recurse(node.right);

        }
      }
      return;
    }
    recurse(root);
  return root;
};
