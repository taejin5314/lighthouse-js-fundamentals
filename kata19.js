const generateBoard = function (whiteQueen, blackQueen) {
  // set an empty chess board.
  let chessBoard = [];
  for (let i = 0; i < 8; i++) {
    let chessRow = [];
    for (let j = 0; j < 8; j++) {
      if ((i === whiteQueen[0] && j === whiteQueen[1]) || (i === blackQueen[0] && j === blackQueen[1])) {
        // if there is a queen, push 1 to the array
        chessRow.push(1);
      } else {
        // if there is no queen, push 0 to the array
        chessRow.push(0);
      }
    }
    // return chess board.
    chessBoard.push(chessRow);
  }
  return chessBoard;
};

const queenThreat = function (generatedBoard) {
  let queenLocation = [];
  for (let i = 0; i < generatedBoard.length; i++) {
    for (let j = 0; j < generatedBoard[i].length; j++) {
      if (generatedBoard[i][j] === 1) {
        // detect the location of queens.
        queenLocation.push([i, j]);
      }
    }
  }

  // if queens are on the same diagonal line.
  if (Math.abs(queenLocation[0][0] - queenLocation[1][0]) === Math.abs(queenLocation[0][1] - queenLocation[1][1])) return true;
  // if queens are on the same horizontal or vertical line.
  else if (queenLocation[0][0] === queenLocation[1][0] || queenLocation[0][1] === queenLocation[1][1]) return true;
  else return false;
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
