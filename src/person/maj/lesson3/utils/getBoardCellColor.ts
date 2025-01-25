export const getBoardCellColor = (
  i: number,
  j: number,
  selectedPosition: number[] | null
) => {
  // if selected position is the same as the current position, return green
  if (
    selectedPosition &&
    selectedPosition[0] === i &&
    selectedPosition[1] === j
  ) {
    return 'bg-green-500';
  }

  return (i + j) % 2 === 0 ? 'bg-slate-400' : 'bg-blue-800';
};
