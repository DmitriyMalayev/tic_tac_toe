/*
There are two approaches to changing data. 

First Approach: 
  Mutuate the data by directly changing the data's values. 
Second Approach 
  Replace the data with a new copy which has the desired changes. 
*/

var playerOne = { score: 1, name: "Jeff" };
playerOne.score = 2;

//Now player is {score: 2, name: "Jeff"}

var playerTwo = { score: 1, name: "Jeffrey" };
var newPlayer = Object.assign({}, playerTwo, { score: 2 });  //playerTwo is unchanged
var newPlayerTwo = { ...playerTwo, score: 2 };  //alternative syntax
console.log(newPlayer, newPlayerTwo);
