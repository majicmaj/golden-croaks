import { BoardState } from '../types';
import { getBoardPieceAtPosition } from './getPiece';

export const getLegalCaptures = (
  selectedPosition: [number, number],
  boardState: BoardState
) => {
  const piece = getBoardPieceAtPosition(selectedPosition, boardState);
  const { type, color } = piece || {};

  const [x, y] = selectedPosition;

  const isBlack = color === 'black';
  const modifier = isBlack ? -1 : 1;

  if (type === 'pawn') {
    const leftCaptureTarget = getBoardPieceAtPosition(
      [x + 1 * modifier, y - 1],
      boardState
    );
    const rightCaptureTarget = getBoardPieceAtPosition(
      [x + 1 * modifier, y + 1],
      boardState
    );

    const captures = [];
    if (leftCaptureTarget && leftCaptureTarget.color !== color) {
      captures.push([x + 1 * modifier, y - 1]);
    }
    if (rightCaptureTarget && rightCaptureTarget.color !== color) {
      captures.push([x + 1 * modifier, y + 1]);
    }
    return captures;
  }
};

export default getLegalCaptures;
