import { useState } from 'react';
import { OPTIONS } from './constants';
import { getWinMessage } from './utils/getWinMessage';

function RockPaperScissors() {
  const [playerOnePick, setPlayerOnePick] = useState('');
  const [playerTwoPick, setPlayerTwoPick] = useState('');
  const [playerOneHp, setPlayerOneHp] = useState(10);
  const [playerTwoHp, setPlayerTwoHp] = useState(10);

  const playing = playerOneHp > 0 && playerTwoHp > 0;
  const winner = getWinMessage(playerOneHp, playerTwoHp);

  const getPlayerTwoPick = () => {
    const number = Math.floor(Math.random() * OPTIONS.length);
    return number;
  };

  const pickRoundWinner = (a: string, b: string) => {
    if (a === b) return;

    if (
      (a === 'Rock' && b === 'Scissors') ||
      (a === 'Paper' && b === 'Rock') ||
      (a === 'Scissors' && b === 'Paper')
    )
      return setPlayerTwoHp(playerTwoHp - 1);
    return setPlayerOneHp(playerOneHp - 1);
  };

  const play = (pick: string) => {
    setPlayerOnePick(pick);
    const pickTwo = OPTIONS[getPlayerTwoPick()];
    setPlayerTwoPick(pickTwo);
    pickRoundWinner(pick, pickTwo);
  };

  const resetGame = () => {
    setPlayerOnePick('');
    setPlayerTwoPick('');
    setPlayerOneHp(10);
    setPlayerTwoHp(10);
  };

  return (
    <div>
      {playing === false ? (
        <div className="h-full w-full bg-slate-500">
          <div className="text-center">
            {winner === '' ? '(Audience)👀👀👀' : winner}
          </div>
          <div className="flex justify-between">
            <div className="ml-2 rounded border-2 border-black bg-blue-500 pl-1 pr-1 font-semibold">
              Player 1: {playerOnePick} HP: {playerOneHp}
            </div>
            <div className="mr-2 rounded border-2 border-black bg-red-500 pl-1 pr-1 font-semibold">
              Player 2: {playerTwoPick} HP: {playerTwoHp}
            </div>
          </div>
          <div className="ml-2 flex justify-start">
            {OPTIONS.map((option) => (
              <button className="mr-2 mt-4 rounded border border-black bg-yellow-300 pl-2 pr-2 font-semibold">
                {option}
              </button>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              className="mb-1 rounded border-2 border-black bg-purple-600 pl-1 pr-1 font-semibold"
              onClick={() => {
                resetGame();
              }}
            >
              Restart
            </button>
          </div>
        </div>
      ) : (
        <div className="h-full w-full bg-slate-500">
          <div className="text-center">(Audience)👀👀👀</div>
          <div className="flex justify-between">
            <div className="ml-2 rounded border-2 border-black bg-blue-500 pl-1 pr-1 font-semibold">
              Player 1: {playerOnePick} HP: {playerOneHp}
            </div>
            <div className="mr-2 rounded border-2 border-black bg-red-500 pl-1 pr-1 font-semibold">
              Player 2: {playerTwoPick} HP: {playerTwoHp}
            </div>
          </div>
          <div className="ml-2 flex justify-start">
            {OPTIONS.map((option) => (
              <button
                className="mr-2 mt-4 rounded border border-black bg-yellow-300 pl-2 pr-2 font-semibold"
                onClick={() => play(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              className="mb-1 rounded border-2 border-black bg-purple-600 pl-1 pr-1 font-semibold"
              onClick={() => resetGame()}
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RockPaperScissors;
