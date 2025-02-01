import { useState } from 'react';
import { getRandomPick } from './utils/getRandomPick';
import { getResult } from './utils/getResult';

const OPTIONS = ['Rock', 'Paper', 'Scissors'];

const RockPaperScissors = () => {
  const [playerOnePick, setPlayerOnePick] = useState<string>('');
  const [playerTwoPick, setPlayerTwopick] = useState<string>('');

  const [playerOneScore, setPlayerOneScore] = useState<number>(0);
  const [playerTwoScore, setPlayerTwoScore] = useState<number>(0);

  const shoot = (a: string, b: string) => {
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

  const handleReset = () => {
    setPlayerOnePick('');
    setPlayerTwopick('');
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
  };

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="grid grid-cols-[1fr,auto,1fr] gap-2 p-2 italic">
        <div className="relative flex flex-col items-start justify-center rounded border-2 border-blue-500 p-1 text-4xl font-bold">
          <div className="absolute grid w-full place-items-center">
            <p>{playerOneScore}</p>
            <p className="text-sm opacity-80">YOU</p>
          </div>
          <div
            className="h-16 rounded bg-blue-500"
            style={{ width: Math.min(100, playerOneScore * 10) + '%' }}
          />
        </div>

        <div className="flex flex-col items-start justify-center p-1 text-4xl font-bold">
          <button
            onClick={handleReset}
            className="rounded border border-green-500 px-2 text-lg font-normal"
          >
            Reset
          </button>
        </div>

        <div className="relative flex flex-col items-end justify-center rounded border-2 border-red-500 p-1 text-4xl font-bold">
          <div className="absolute grid w-full place-items-center">
            <p>{playerTwoScore}</p>
            <p className="text-sm opacity-80">COMPUTER</p>
          </div>
          <div
            className="h-16 rounded bg-red-500"
            style={{ width: Math.min(100, playerTwoScore * 10) + '%' }}
          />
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
