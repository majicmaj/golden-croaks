import { CHESS_SYMBOLS } from './constants';

interface PieceProps {
  type?: string;
  color?: string;
}

export const Piece = ({ type, color }: PieceProps) => {
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
