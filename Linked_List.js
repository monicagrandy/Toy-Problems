// Implement a linked-list

var LinkedList = function (initialValue) {
       this.head = null;
       this.tail = null;
       if(initialValue) {
         this.addToTail(initialValue);
       }
      }
      
      LinkedList.prototype.addToTail = function(value){
        var newNode = Node(value);
        if(this.head === null){
          this.head = newNode
          this.tail = newNode
        }
        else {
          this.tail.next = newNode
          this.tail = newNode
        }
      }
      
      LinkedList.prototype.removeHead = function(){
        if(this.head === null){
          return null
        }
        if(this.head.next === null){
          delete this.head
          delete this.tail
          return null
        }
        var newHead = this.head.value
        var deleteThis = this.head
        this.head = this.head.next
        delete deleteThis
        return newHead
      }
      
      LinkedList.prototype.contains = function(target){
        if(this.head === null){
          return false
        }
        var found
        function search(node){
          if(node.value === target){
            found = true
          }
          else if(node.next === null){
            found = false
          }
          else {
            search(node.next)
          }
        }
        search(this.head)
        return found
      }
      
      var Node = function(value){
        var node = {};
        node.value = value;
        node.next = null
        return node;
      }
    


