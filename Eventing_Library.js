//Eventing Library

//Make an eventing system mix-in that adds .trigger() and .on() to any input object.

// Example usage:
// var obj = mixEvents({ name: 'Alice', age: 30 });
// obj.on('ageChange', function(){ // On takes an event name and a callback function
//   console.log('Age changed');
// });
// obj.age++;
// obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
// Caveats:
// - mixEvents should return the original object it was passed after extending it.
// - If we repeatedly call .on with the same event name, it should
// continue to call the old function as well. That is to say, we can have multiple
// listeners for an event.
// - If obj.trigger is called with additional arguments, pass those to the
// listeners.
// - It is not necessary to write a way to remove listeners.

var mixEvents = function(obj) {

  var events = {};

  obj.trigger = function (event) {
    var args = [].slice.call(arguments,1);
    for(var key in events){
      for(var i = 0; i < events[key].length; i++){
        events[key][i].apply(this, args) ;
      }
    }
  };

  // Register a callback to be fired on this event.
  obj.on = function (event, callback) {
    var args = [].slice.call(arguments);
    if(typeof callback === "function"){
      console.log(args);
      //check if event already exists in the events object
      if(!events[event]){
        events[event] = [];
      }
      events[event].push(callback);
    }
  };
  return obj;
};
