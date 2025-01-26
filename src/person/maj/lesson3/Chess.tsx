import { useState } from 'react';
import { ALL_PIECES, BOARD, CHESS_SYMBOLS } from './constants';
import { getBoardPieceAtPosition } from './utils/getPiece';
import { getBoardCellColor } from './utils/getBoardCellColor';

const Piece = ({ type, color }: { type: string; color: string }) => {
  const white = 'text-white';
  const black = 'text-black';

  return (
    <div className="flex items-center justify-center">
      <span className={`${color === 'white' ? white : black}`}>
        {CHESS_SYMBOLS[type as keyof typeof CHESS_SYMBOLS]}
      </span>
    </div>
  );
};

const Chess = () => {
  const [boardState] = useState(ALL_PIECES);
  const [selectedSquare, setSelectedSquare] = useState<[number, number] | null>(
    null
  );

  const handleClick = (i: number, j: number) => {
    // Check if square is already selected
    if (selectedSquare && selectedSquare[0] === i && selectedSquare[1] === j) {
      setSelectedSquare(null); // deselect the square
    } else {
      const piece = getBoardPieceAtPosition([i, j], boardState);
      if (piece) {
        setSelectedSquare([i, j]);
      }
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
                  className={`flex h-full w-full items-center justify-center ${getBoardCellColor(i, j, selectedSquare)}`}
                  onClick={() => handleClick(i, j)}
                >
                  {getBoardPieceAtPosition([i, j], boardState) && (
                    <Piece {...getBoardPieceAtPosition([i, j], boardState)} />
                  )}
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
