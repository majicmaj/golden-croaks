import { useState } from 'react';
import { getResult } from './utils/getResult';
import { getRandomPick } from './utils/getRandomPick';

const OPTIONS = ['Rock', 'Paper', 'Scissors'];

const RockPaperScissors = () => {
  const [playerOnePick, setPlayerOnePick] = useState<string>('');
  const [playerTwoPick, setPlayerTwopick] = useState<string>('');

  const [playerOneScore, setPlayerOneScore] = useState<number>(0);
  const [playerTwoScore, setPlayerTwoScore] = useState<number>(0);

  const shoot = (a, b) => {
    setPlayerOnePick(a);
    setPlayerTwopick(b);
    const score = getResult(a, b);

    if (score === 1) return setPlayerOneScore(playerOneScore + 1);
    if (score === -1) return setPlayerTwoScore(playerTwoScore + 1);
  };

  const handleClick = (i: number) => {
    const a = OPTIONS[i];
    const b = OPTIONS[getRandomPick()];
    shoot(a, b);
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
          <p>{playerOnePick}</p>
          <p className="text-sm opacity-80">You</p>
        </div>
        <div className="flex flex-col items-center">
          <p>{playerTwoPick}</p>
          <p className="text-sm opacity-80">Computer</p>
        </div>
      </div>

      <div className="flex justify-center gap-2">
        {OPTIONS.map((option, i) => (
          <button
            key={i}
            className="w-1/3 border p-2"
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
