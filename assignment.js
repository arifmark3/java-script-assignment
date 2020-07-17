// assignment 1 feetTomile

function feetToMile(feet) {
  var mile = feet * 0.000189394;
  return mile;
}
var result = feetToMile(5300);
console.log(result);

// assignment -2 wood calculator
function woodCalculator(chair, table, bed) {
  var chairWoodCount = chair * 1;
  var tableWoodCount = table * 3;
  var bedWoodCount = bed * 5;

  var totalWoodCount = chairWoodCount + tableWoodCount + bedWoodCount;
  return totalWoodCount;
}

var totalWoodReqired = woodCalculator(12, 3, 3);

console.log(totalWoodReqired);

// assingment 3 brickCalculator

var feet = 1000;

function brickCalculator(floor) {
  if (floor <= 10) {
    console.log(floor * (feet * 15));
  } else if (floor > 10 && floor <= 20) {
    console.log(floor * (feet * 12));
  } else {
    console.log(floor * (feet * 10));
  }
}

brickCalculator(3);

// assignment 4 tinyFriend

var friends = ["Tayeba", "Maria", "Arif", "Oishi"];

function tinyFriend(friends) {
  var smallestName = friends[0];

  for (var i = 0; i < friends.length; i++) {
    var currentName = friends[i];

    if (currentName < smallestName) {
      smallestName = currentName;
    }
  }
  return smallestName;
}

var smallName = tinyFriend(["ari", "tayeba", "ay"]);

console.log(smallName);
