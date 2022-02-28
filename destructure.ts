// Destructuring Array/Object

const gamesArr = ["Football", "Cricket", "Hockey"];
const gameObject = {
  gameName: "Cricket",
  gameId: 101,
  playerCount: 11,
  teamName: "abc team",
};

// we can destructure array and object. destructure means pulling out the elements in
// some other variables ES-6 feature.

// Example 1: array elements can be destructure like shown
const [game1, game2, ...othergames] = gamesArr;

// here game1 is new variable which hold 0 index value which is Football and
// game2 holds Cricket and the othergames spread out all remaining value in it

// Note: Array destructuring is done in sequence like from 0 to upto length -1
// we can not destructure any particular index value

console.log(game1, game2, othergames);

// Example 2:
const { gameName: sportName, playerCount, teamName } = gameObject;

// Object destructure is done with key names like any name can be use to destructure an object
// plus we can also assign new name to any key like shown above we used sportName for gameName key/.

console.log(sportName, playerCount, teamName);
