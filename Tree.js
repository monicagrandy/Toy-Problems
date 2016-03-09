// Someone wrote a tree implementation, but they forgot to finish writing the definitions for addChild and contains.

// Help this person finish their tree by adding in the missing code for these methods.

var treeMaker = function(value){
  var newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};
treeMaker.methods = {};
treeMaker.methods.addChild = function(value){
  var node = treeMaker(value);
  this.children.push(node); 
}
treeMaker.methods.contains = function(value){
  var found = false
  function search(node){
    if (node.value === value) {
      found = true;
  }
  for(var i = 0; i < node.children.length; i++){
      search(node.children[i])
   }
  }
  search(this);
  return found
}