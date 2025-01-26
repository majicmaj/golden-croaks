export const getBoardCellColor = (
  i: number,
  j: number,
  selectedPosition:[number, number] | null
) => {
  // Make selected cell green
  if (
    selectedPosition &&
    selectedPosition[0] === i &&
    selectedPosition[1] === j
  ) {
    return 'bg-green-500';
  }

  // Otherwise, alternate between dark blue and light blue
  return (i + j) % 2 === 0 ? 'bg-blue-300' : 'bg-blue-900';
};
