import { useState } from 'react';
import { ALL_PIECES, BOARD, CHESS_SYMBOLS } from './constants';

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

const getPiece = (position: number[], boardState: any[]) => {
  return boardState.find(
    (piece) =>
      piece.position[0] === position[0] && piece.position[1] === position[1]
  );
};

const Chess = () => {
  const [boardState] = useState(ALL_PIECES);

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
                  className={`flex h-full w-full items-center justify-center ${(i + j) % 2 === 0 ? 'bg-amber-800' : 'bg-amber-100'}`}
                >
                  {getPiece([i, j], boardState) && (
                    <Piece {...getPiece([i, j], boardState)} />
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
