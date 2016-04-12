//Tree Count Leaves

//Implement the countLeaves function in this Tree class.

// A leaf node is any node in the tree that has no children. countLeaves should
// traverse the tree, and return the number of leaf nodes the tree contains.
//
// Illustration of a tree with three leaves:
//
//       * <- root
//      / \
//     *    * <- leaf
//    / \
//   *   * <- leaf
//  /
// * <- leaf
// Example usage:
//
// var root = new Tree();
//
// root.countLeaves(); // 1
//
// root.addChild(new Tree());
//
// root.countLeaves(); // still 1
//
// root.addChild(new Tree());
//
// root.children[0].addChild(new Tree());
//
// root.children[0].addChild(new Tree());
//
// root.children[0].children[0].addChild(new Tree());
//
// root.countLeaves(); // 3

var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.countLeaves = function () {
  //initialize counter for leaves
  var leaves = 0;
  //check if the root does not have children
  if(this.children.length === 0){
    return 1;
  }
  //initialize recursive function
  function count(tree){
    //check if current tree node has children
    if(tree.children.length === 0){
      //if not, add to leaf count
      leaves+=1;
    }
    var kids = tree.children;
    //otherwise look at all the children of that tree
    for(var i = 0; i < kids.length; i++){
      //go back to top and check if each one has children
      count(kids[i]);
    }
  }
  //recurse on the entire tree
  count(this);
  //return leaf count
  return leaves;
};

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
