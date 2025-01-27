import { BoardState } from '../types';
import { getBoardPieceAtPosition } from './getPiece';

const getLegalMoves = (
  selectedPosition: [number, number],
  boardState: BoardState
) => {
  const piece = getBoardPieceAtPosition(selectedPosition, boardState);
  const { type, color } = piece || {};

  const [x, y] = selectedPosition;

  const isBlack = color === 'black';
  const modifier = isBlack ? -1 : 1;

  if (type === 'pawn') {
    return [[x + 1 * modifier, y]];
  }
};

export default getLegalMoves;
