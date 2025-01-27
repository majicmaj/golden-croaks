import { useState } from 'react';
import { getResult } from './utils/getResult';
import { getRandomPick } from './utils/getRandomPick';

const OPTIONS = ['Rock', 'Paper', 'Scissors'];

const RockPaperScissors = () => {
  const [playerOnePick, setPlayerOnePick] = useState<number | null>(null);
  const [playerTwoPick, setPlayerTwopick] = useState<number | null>(null);

  const [playerOneScore, setPlayerOneScore] = useState<number>(0);
  const [playerTwoScore, setPlayerTwoScore] = useState<number>(0);

  const playerOneChoice = playerOnePick !== null && OPTIONS[playerOnePick];
  const playerTwoChoice = playerTwoPick !== null && OPTIONS[playerTwoPick];

  const shoot = () => {
    if (playerOnePick === playerTwoPick) return; // Draw

    const isWin = getResult(playerOneChoice, playerTwoChoice);

    if (isWin) {
      setPlayerOneScore(playerOneScore + 1);
    } else {
      setPlayerTwoScore(playerTwoScore + 1);
    }
  };

  const handleClick = (i: number) => {
    setPlayerOnePick(i);
    setPlayerTwopick(getRandomPick());
    shoot();
  };

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex justify-around border p-2">
        <div className="flex flex-col items-center">
          <p>{playerOneScore}</p>
          <p className="text-sm opacity-80">You</p>
        </div>
        <div className="flex flex-col items-center">
          <p>{playerTwoScore}</p>
          <p className="text-sm opacity-80">Computer</p>
        </div>
      </div>

      <div className="grid flex-1 grid-cols-2 place-items-center py-4">
        <div className="flex flex-col items-center">
          <p>{playerOneChoice}</p>
          <p className="text-sm opacity-80">You</p>
        </div>
        <div className="flex flex-col items-center">
          <p>{playerTwoChoice}</p>
          <p className="text-sm opacity-80">Computer</p>
        </div>
      </div>

      <div className="flex justify-center gap-2">
        {OPTIONS.map((option, i) => (
          <button
            className="w-1/3 border p-2"
            key={i}
            onClick={() => handleClick(i)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RockPaperScissors;
