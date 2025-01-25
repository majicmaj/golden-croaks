export const getBoardPieceAtPosition = (
  position: number[],
  boardState: any[]
) => {
  return boardState.find(
    (piece) =>
      piece.position[0] === position[0] && piece.position[1] === position[1]
  );
};
