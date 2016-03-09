// Finish this implementation of a Hash Table. It should have the methods insert(), retrieve(), and remove(). Your hash table need not resize itself, but shall handle collisions.

var makeHashTable = function(){
    var table = {};
    var storage = [];
    var storageLimit = 1000;

    table.insert = function(key, value){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      storage[index] = storage[index] || [];
      //does storage index already exist?
      //if no
      if(storage[index].length === 0){
        //add bucket to storage with twople as the only element
        storage[index] = [[key,value]]
      }
      //if yes
      else {
        //does the key already exist?
        storage[index].forEach(function(item){
           //if yes
          if(item[0] === key){
            //overwrite value
            item[1] = value
          }
        });
        //if no
        //push key/val twople into that array
        storage[index].push([key,value])
      }    
    };

    table.retrieve = function(key){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      //does the array already exist?
      //if no
      if(!storage[index]){
        //return null
        return null
      }
      //if yes
      //look up by key and return
      var result = null
      storage[index].forEach(function(item){
        if(item[0] === key){
          result = item[1]
        }
      })
      return result
    };

    table.remove = function(key){
      var index = getIndexBelowMaxForKey(key, storageLimit);
       //does the array already exist in the table?
        //if no
        if(!storage[index]){
          //return null
          return null
        }
        storage[index].forEach(function(item){
          if(item[0] === key){
            //look up by key and splice it out
            storage[index].splice(storage[index].indexOf(item), 1)
          }
      });
    }
    return table;  
  };  
  
 var getIndexBelowMaxForKey = function(str, max){
   var hash = 0;
   for (var i = 0; i < str.length; i++) {
     hash = (hash<<5) + hash + str.charCodeAt(i);
     hash = hash & hash; // Convert to 32bit integer
     hash = Math.abs(hash);
   }
   return hash % max;
 };
