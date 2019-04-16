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
  /* console.log("turnLeft was called!");
  console.log("I was facing " + rover.direction); */
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

  /*  console.log("Now I'm facing " + rover.direction); */

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

  if (!checkBoundaries(rover)) {
    console.log("Turn before move. I can't move outside the perimeter");
    return;
  } else {
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
  }


  /* /* console.log("My coordinates are " + rover.positionX + "," + rover.positionY); */
}

function move(command, rover) {

  for (var i = 0; i < command.length; i++) {

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
  console.log(rover.travelLog);
}


function checkBoundaries(rover) {

  const x = rover.positionX;
  const y = rover.positionY;
  const dir = rover.direction;

  /* console.log("[" + x + "," + y + "]" + dir); */

  if (y === 0) { //first row
    if (dir === 'N' || (x === 0 && dir === 'W') || (x === 9 && dir === 'E')) {
      return false;
    } else return true;
  } else if (y === 9) { //last row
    if (dir === 'S' || (x === 0 && dir === 'W') || (x === 9 && dir === 'E')) {
      return false;
    } else return true;
  } else if (x === 0) { //first column
    if (dir === 'W') {
      return false;
    } else if (y === 0 && dir === 'N') {
      return false;
    } else if (y === 9 && dir === 'S') {
      return false;
    } else return true;
  } else if (x === 9) { //last column
    if (dir === 'E') {
      return false;
    } else if (y === 0 && dir === 'N') {
      return false;
    } else if (y === 9 && dir === 'S') {
      return false;
    } else return true;
  } else
    return true;

}
//Execution tests
move('ffrfrf', rover);


/* [ 
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ] 
 ] */