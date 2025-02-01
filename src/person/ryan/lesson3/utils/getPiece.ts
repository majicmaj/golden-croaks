import { BoardState, PieceState } from '../types';

export const getBoardPieceAtPosition = (
  position: [number, number],
  boardState: BoardState
): PieceState | undefined => {
  return boardState.find(
    (piece) =>
      piece.position[0] === position[0] && piece.position[1] === position[1]
  );
};
