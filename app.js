// Rover Object Goes Here
var rover = {
  direction: 'N',
  positionX: 0,
  positionY: 0,
  travelLog: []
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
  console.log("I was facing " + rover.direction);
  switch (rover.direction) {
    case "N":
      rover.direction = 'E';
      break;
    case "S":
      rover.direction = 'W';
      break;
    case "E":
      rover.direction = 'S';
      break;
    case "W":
      rover.direction = 'N';
      break;
    default:
      rover.direction = rover.direction;
  }

  console.log("Now I'm facing " + rover.direction);

}

function moveForward(rover) {
  console.log("moveForward was called");
  switch (rover.direction) {
    case "N":
      rover.positionY--;
      break;
    case "S":
      rover.positionY++;
      break;
    case "E":
      rover.positionX++;
      break;
    case "W":
      rover.positionX--;
      break;
  }
  /* rover.travelLog.push([rover.positionX, rover.positionY, rover.direction]); */
  console.log("My coordinates are " + rover.positionX + "," + rover.positionY);
}

function move(command, rover) {

  for (var i = 0; i < command.length; i++) {
    console.log("iteration number" + i);
    switch (command[i]) {
      case 'r':
        turnRight(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      case 'f':
        moveForward(rover);
        break;
    }
    rover.travelLog.push([rover.positionX, rover.positionY, rover.direction]);
  }
  console.log(rover.travelLog)
}

//Execution tests
move('rrfffflfr', rover);