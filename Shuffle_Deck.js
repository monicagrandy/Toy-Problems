// Given an array containing a deck of cards, implement a function that shuffles the deck. The helper function orderedDeck() is not necessary for your solution; it is provided to create an ordered deck if you debug your code in the console or using snippets.

var shuffleDeck = function(deck) {
  var length = deck.length;
  while(length >= 0){
    var rand = Math.floor(Math.random()*length);
    var val = deck.splice(rand,1)
    deck.push(val[0]);
    length--;
  }
  console.log(deck.length)
  return deck;
}