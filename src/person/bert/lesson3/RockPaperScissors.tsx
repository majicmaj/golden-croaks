import { useState } from 'react';
import { getWinner } from './utils/getWinner';
import { getPlayerTwoPick } from './utils/getPlayerTwoPick';
import { OPTIONS } from './constants';

function RockPaperScissors() {
  const [playerOnePick, setPlayerOnePick] = useState('');
  const [playerTwoPick, setPlayerTwoPick] = useState('');
  const [playerOneHp, setPlayerOneHp] = useState(10);
  const [playerTwoHp, setPlayerTwoHp] = useState(10);

  const winner = getWinner(playerOneHp, playerTwoHp);

  const pickRoundWinner = (a: string, b: string) => {
    if (a === b) return;
    else if (
      (a === 'Rock' && b === 'Scissors') ||
      (a === 'Paper' && b === 'Rock') ||
      (a === 'Scissors' && b === 'Paper')
    )
      setPlayerTwoHp(prev => prev - 1);
    else setPlayerOneHp(prev => prev - 1);
  };

  const play = (pick: string) => {
    if (winner) return
    setPlayerOnePick(pick);
    const pickTwo = getPlayerTwoPick();
    getPlayerTwoPick();
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
      <div className="h-full w-full bg-slate-500">
        <div className="text-center">
          {winner === null ? '(Audience)👀👀👀' : winner}
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
            <button
              className="mr-2 mt-4 rounded border border-black bg-yellow-300 pl-2 pr-2 font-semibold"
              onClick={() => play(option)}>
              {option}
            </button>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            className="mb-1 rounded border-2 border-black bg-purple-600 pl-1 pr-1 font-semibold"
            onClick={() => resetGame()}>
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}

export default RockPaperScissors;
