// //Linked List Cycles
//
// //Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere.
//
// Explanation:
//
// Generally, we assume that a linked list will terminate in a null next pointer, as follows:
//
//  A -> B -> C -> D -> E -> null
// A ‘cycle’ in a linked list is when traversing the list would result in visiting the same nodes over and over.
//
// This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
//
//  A -> B -> C
//       ^    |
//       |    v
//       E <- D
// 'Constraint 1: Do this in linear time'
//
// 'Constraint 2: Do this in constant space'
//
// 'Constraint 3: Do not mutate the original nodes in any way'

var hasCycle = function(linkedList){
  //set first node to linkedList
  //set  pointer1 to head node
  //set pointer2 to the next node
  //if pointer1.next is null
    //return false
  //if pointer1 is ever equal to pointer2 OR pointer1 is ever equal to pointer2.next
    //return true
  //increment pointer1 and pointer2
  var node = linkedList;
  var p1 = node;
  var p2 = node.next;
  while(node){
    if(p2 === null || p2.next === null){
      return false;
    }
    if(p1 === p2){
      return true;
    }
    p1 = p1.next;
    p2 = p2.next.next;
  }
};
