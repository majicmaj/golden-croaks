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

  const pickRoundWinner = (player1: string, player2: string) => {
    if (player1 === player2) return;
    else if (
      (player1 === 'Rock' && player2 === 'Scissors') ||
      (player1 === 'Paper' && player2 === 'Rock') ||
      (player1 === 'Scissors' && player2 === 'Paper')
    )
      setPlayerTwoHp((prev) => prev - 1);
    else setPlayerOneHp((prev) => prev - 1);
  };

  const play = (pick: string) => {
    if (winner) return;
    setPlayerOnePick(pick);
    const pickTwo = getPlayerTwoPick();
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
      <div className="h-full w-full bg-slate-500">
        <div className="text-center font-semibold">
          {winner === null ? '(Audience)👀👀👀' : winner}
        </div>
        <div className="flex justify-between">
          <div className="ml-2 flex w-[140px] flex-col">
            <div className="border-1 rounded border-2 border-black bg-gray-400 font-semibold">
              {/* Using negative margin to stack the text over the green bar */}
              <div className="z-10 -mb-6 text-center">{playerOneHp}</div>
              <div
                className="h-[28px] rounded border-2 border-black bg-green-500"
                style={{ width: playerOneHp * 10 + '%' }}
              ></div>
            </div>
            <div className="rounded border-2 border-black bg-blue-500 pl-1 pr-1 text-center font-semibold">
              Player 1: {playerOnePick}
            </div>
          </div>
          <div className="mr-2 flex w-[140px] flex-col">
            <div className="border-1 rounded border-2 border-black bg-gray-400 font-semibold">
              {/* Using negative margin to stack the text over the green bar */}
              <div className="z-10 -mb-6 text-center">{playerTwoHp}</div>
              <div
                className="h-[28px] rounded border-2 border-black bg-green-500"
                style={{ width: playerTwoHp * 10 + '%' }}
              ></div>
            </div>
            <div className="rounded border-2 border-black bg-red-500 pl-1 pr-1 text-center font-semibold">
              Player 2: {playerTwoPick}
            </div>
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
            onClick={resetGame}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}

export default RockPaperScissors;
