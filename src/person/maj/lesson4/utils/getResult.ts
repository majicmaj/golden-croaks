export const getResult = (a: string | null, b: string | null) => {
  const rockScissors = a === 'Rock' && b === 'Scissors';
  const scissorsPaper = a === 'Scissors' && b === 'Paper';
  const paperRock = a === 'Paper' && b === 'Rock';

  const isAWin = rockScissors || scissorsPaper || paperRock;

  return isAWin;
};
