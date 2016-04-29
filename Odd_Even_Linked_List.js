//Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

//You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

var oddEvenList = function(head) {
    if(head === null){
        return null
    }
    var odds = head;
    var evens = head.next
    var save
    while(odds.next !== null && odds.next.next !== null){
        save = odds.next;
        odds.next = odds.next.next;
        odds = odds.next;
        save.next = odds.next
    }
    odds.next = evens
    return head
};