//Given a number of rounds n, return all the possible rock-paper-scissors 
//play possibilities for that number of rounds.

var rockPaperScissors = function(rounds){
	//if no rounds are provided user 3
	rounds = rounds || 3;
	//store possibilities
	var rps = ['rock', 'paper', 'scissors'];
	//we will return results at the end
	var results = [];

	function recurse(currentArray){

		//console.log("inside recurse function");
		if(currentArray.length === rounds){
			results.push(currentArray.join(", "));
			console.log("results = " + results)
			return;
		}

		for(var i = 0; i < rps.length; i++){
			//console.log("inside for loop")
			var currentPlay = rps[i];
			//we will continue to add to our current array until it reaches the number of rounds
			recurse(currentArray.concat(currentPlay));
			//console.log("currentArray = " + currentArray)
		}
	}
	recurse([]);
	return results;
}