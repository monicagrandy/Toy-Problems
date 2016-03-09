// Implement the function asyncMap:

// asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
// Each of the tasks takes a separate callback and invokes that callback when complete.

// The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.

// The order of these results should be the same as the order of the tasks.
// It is important to note that this is not the order in which the tasks return,
// but the order in which they are passed to asyncMap.

// Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
// on the results array.

function asyncMap(tasks, callback) {
  //create a new array and set it equal to the length of our tasks array
   var completeTasks = new Array(tasks.length);
   //initialize a countdown for how many tasks are left in the tasks array
   var countdown = tasks.length;
   //loop through the tasks array
   tasks.forEach(function (task, index) {
       //each task takes a callback
       task(function (value) {
           //set the result of the executed callback function to a specific index value
           completeTasks[index] = value;
           //decrement counter
           countdown--;
           //once we have gone through the tasks array
           if (countdown === 0) {
              //invoke the callback on the completeTasks array
               callback(completeTasks);
           }
       });
   });
}