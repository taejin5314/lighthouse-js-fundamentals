const blocksAway = function (directions) {
  let angle = 0;
  let currentLocation = { east: 0, north: 0 };
  for (let i = 0; i < directions.length; i++) {
    if (i % 2 === 0) {
      // if the direction is right, 90 degree turn clockwise.
      if (directions[i] === 'right') angle += 90;
      // if the direction is left, 90 degree turn anticlockwise.
      else if (directions[i] === 'left') angle -= 90;
    } else if (i % 2 === 1) {
      // make the angle between 0 to 359 degree.
      if (angle < 0) {
        angle += 360;
      } else if (angle >= 360) {
        angle -= 360;
      }
      if (angle === 0) currentLocation.north += directions[i];
      else if (angle === 90) currentLocation.east += directions[i];
      else if (angle === 180) currentLocation.north -= directions[i];
      else if (angle === 270) currentLocation.east -= directions[i];
    }
  }
  return currentLocation;
};

console.log(blocksAway(['right', 2, 'left', 3, 'left', 1]));
console.log(blocksAway(['left', 1, 'right', 1, 'left', 1, 'right', 1, 'left', 1, 'right', 1]));
console.log(blocksAway(['left', 3, 'right', 1, 'right', 3, 'right', 1]));
