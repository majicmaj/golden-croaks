import { BoardState } from './../types';
import getLegalMoves from './getLegalMoves';

export const getBoardCellColor = (
  i: number,
  j: number,
  selectedPosition: [number, number] | null,
  boardState: BoardState
) => {
  // Make selected cell green
  if (
    selectedPosition &&
    selectedPosition[0] === i &&
    selectedPosition[1] === j
  ) {
    return 'bg-green-500';
  }

  let className = '';
  // Make legal moves border
  if (selectedPosition) {
    const legalMoves = getLegalMoves(selectedPosition, boardState);
    if (legalMoves?.some((move) => move[0] === i && move[1] === j)) {
      className += 'border-8 border-green-300 ';
    }
  }

  // Otherwise, alternate between dark blue and light blue
  className += (i + j) % 2 === 0 ? 'bg-blue-300' : 'bg-blue-900';
  return className;
};
