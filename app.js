// Rover Object Goes Here
var rover = {
  direction: 'N',
}
// ======================

// ======================
function turnLeft(rover) {
  console.log("turnLeft was called!");
  console.log("I was facing " + rover.direction);
  switch (rover.direction) {
    case "N":
      rover.direction = 'W';
      break;
    case "S":
      rover.direction = 'E';
      break;
    case "E":
      rover.direction = 'N';
      break;
    case "W":
      rover.direction = 'S';
      break;
    default:
      rover.direction = rover.direction;
  }

  console.log("Now I'm facing " + rover.direction);

}

function turnRight(rover) {
  console.log("turnRight was called!");
}

function moveForward(rover) {
  console.log("moveForward was called")
}

//Execution tests
turnLeft(rover);
turnLeft(rover);
turnLeft(rover);
turnLeft(rover);