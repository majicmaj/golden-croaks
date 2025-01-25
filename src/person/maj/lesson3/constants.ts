export const BOARD = Array.from({ length: 8 }, () =>
  Array.from({ length: 8 }, (_, i) => i)
);

const WHITE_PIECES = [
  {
    type: 'rook',
    position: [0, 0],
    color: 'white',
  },
  {
    type: 'knight',
    position: [0, 1],
    color: 'white',
  },
  {
    type: 'bishop',
    position: [0, 2],
    color: 'white',
  },
  {
    type: 'queen',
    position: [0, 3],
    color: 'white',
  },
  {
    type: 'king',
    position: [0, 4],
    color: 'white',
  },
  {
    type: 'bishop',
    position: [0, 5],
    color: 'white',
  },
  {
    type: 'knight',
    position: [0, 6],
    color: 'white',
  },
  {
    type: 'rook',
    position: [0, 7],
    color: 'white',
  },
  {
    type: 'pawn',
    position: [1, 0],
    color: 'white',
  },
  {
    type: 'pawn',
    position: [1, 1],
    color: 'white',
  },
  {
    type: 'pawn',
    position: [1, 2],
    color: 'white',
  },
  {
    type: 'pawn',
    position: [1, 3],
    color: 'white',
  },
  {
    type: 'pawn',
    position: [1, 4],
    color: 'white',
  },
  {
    type: 'pawn',
    position: [1, 5],
    color: 'white',
  },
  {
    type: 'pawn',
    position: [1, 6],
    color: 'white',
  },
  {
    type: 'pawn',
    position: [1, 7],
    color: 'white',
  },
];

const BLACK_PIECES = [
  {
    type: 'rook',
    position: [7, 0],
    color: 'black',
  },
  {
    type: 'knight',
    position: [7, 1],
    color: 'black',
  },
  {
    type: 'bishop',
    position: [7, 2],
    color: 'black',
  },
  {
    type: 'queen',
    position: [7, 3],
    color: 'black',
  },
  {
    type: 'king',
    position: [7, 4],
    color: 'black',
  },
  {
    type: 'bishop',
    position: [7, 5],
    color: 'black',
  },
  {
    type: 'knight',
    position: [7, 6],
    color: 'black',
  },
  {
    type: 'rook',
    position: [7, 7],
    color: 'black',
  },
  {
    type: 'pawn',
    position: [6, 0],
    color: 'black',
  },
  {
    type: 'pawn',
    position: [6, 1],
    color: 'black',
  },
  {
    type: 'pawn',
    position: [6, 2],
    color: 'black',
  },
  {
    type: 'pawn',
    position: [6, 3],
    color: 'black',
  },
  {
    type: 'pawn',
    position: [6, 4],
    color: 'black',
  },
  {
    type: 'pawn',
    position: [6, 5],
    color: 'black',
  },
  {
    type: 'pawn',
    position: [6, 6],
    color: 'black',
  },
  {
    type: 'pawn',
    position: [6, 7],
    color: 'black',
  },
];

export const ALL_PIECES = [...WHITE_PIECES, ...BLACK_PIECES];

export const CHESS_SYMBOLS = {
  king: '♔',
  queen: '♕',
  rook: '♖',
  bishop: '♗',
  knight: '♘',
  pawn: '♙',
};

export const PIECE_MOVE_PATTERNS = {
  king: [
    ['plus', 1],
    ['cross', 1],
  ],
  queen: [
    ['plus', 8],
    ['cross', 8],
  ],
  rook: [['plus', 8]],
  bishop: [['cross', 8]],
  knight: [['L', 1]],
  pawn: [['forward', 1]],
};
