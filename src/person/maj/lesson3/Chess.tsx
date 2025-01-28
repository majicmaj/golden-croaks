import { useState } from 'react';
import { ALL_PIECES, BOARD } from './constants';
import { Piece } from './Piece';
import { BoardState } from './types';
import { getBoardCellColor } from './utils/getBoardCellColor';
import getLegalCaptures from './utils/getLegalCaptures';
import getLegalMoves from './utils/getLegalMoves';
import { getBoardPieceAtPosition } from './utils/getPiece';

const Chess = () => {
  const [boardState, setBoardState] = useState<BoardState>(ALL_PIECES);
  const [selectedSquare, setSelectedSquare] = useState<[number, number] | null>(
    null
  );

  const handleClick = (i: number, j: number) => {
    // Check if square is already selected
    if (selectedSquare && selectedSquare[0] === i && selectedSquare[1] === j) {
      return setSelectedSquare(null); // deselect the square
    }

    // Check if a sqaure is selected
    if (selectedSquare) {
      // Check if the move is legal
      const legalMoves = getLegalMoves(selectedSquare, boardState);
      if (legalMoves?.some((move) => move[0] === i && move[1] === j)) {
        // Move the piece
        const pieceIndex = boardState.findIndex(
          (piece) =>
            piece.position[0] === selectedSquare[0] &&
            piece.position[1] === selectedSquare[1]
        );

        const newBoardState = [...boardState];
        newBoardState[pieceIndex] = {
          ...newBoardState[pieceIndex],
          position: [i, j],
        };
        setBoardState(newBoardState);

        // Deselct the square
        setSelectedSquare(null);
        return;
      }

      const captureMoves = getLegalCaptures(selectedSquare, boardState);
      if (captureMoves?.some((move) => move[0] === i && move[1] === j)) {
        const newBoardState = [...boardState];

        // Move the piece
        const pieceIndex = boardState.findIndex(
          (piece) =>
            piece.position[0] === selectedSquare[0] &&
            piece.position[1] === selectedSquare[1]
        );

        newBoardState[pieceIndex] = {
          ...newBoardState[pieceIndex],
          position: [i, j],
        };

        // Remove the captured piece
        const captureIndex = boardState.findIndex(
          (piece) => piece.position[0] === i && piece.position[1] === j
        );

        newBoardState.splice(captureIndex, 1);

        setBoardState(newBoardState);

        // Deselct the square
        setSelectedSquare(null);
        return;
      }
    }

    const piece = getBoardPieceAtPosition([i, j], boardState);
    if (piece) {
      setSelectedSquare([i, j]);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="overflow-hidden rounded-[1vmin] text-[10vmin]">
        {BOARD.map((row, i) => (
          <div key={i} className="flex h-full">
            {row.map((_, j) => (
              <div
                key={j}
                className="flex h-[10vmin] w-[10vmin] items-center justify-center"
              >
                <div
                  className={`flex h-full w-full items-center justify-center ${getBoardCellColor(i, j, selectedSquare, boardState)}`}
                  onClick={() => handleClick(i, j)}
                >
                  <Piece {...getBoardPieceAtPosition([i, j], boardState)} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chess;
