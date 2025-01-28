export type PieceState = {
  type: string;
  position: [number, number];
  color: string;
};

export type BoardState = PieceState[];
