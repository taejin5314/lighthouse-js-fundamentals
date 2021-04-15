const generateBoard = function (whiteQueen, blackQueen) {
  let chessBoard = [];
  for (let i = 0; i < 8; i++) {
    let chessRow = [];
    for (let j = 0; j < 8; j++) {
      if ((i === whiteQueen[0] && j === whiteQueen[1]) || (i === blackQueen[0] && j === blackQueen[1])) {
        chessRow.push(1);
      } else {
        chessRow.push(0);
      }
    }
    chessBoard.push(chessRow);
  }
  return chessBoard;
};

const queenThreat = function (generatedBoard) {
  for (let i = 0; i < generatedBoard.length; i++) {
    for (let j = 0; j < generatedBoard[i].length; j++) {}
  }
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
