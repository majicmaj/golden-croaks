import { useState } from 'react';
import { CRITICAL_HEALTH } from './constants';
import { dmgAmount } from './utils/dmgAmount';
import { healAmount } from './utils/healAmount';

export default function Closure() {
  const [playerHp, setPlayerHp] = useState(100);
  const isAlive = playerHp > 0;

  const fight = () => {
    if (!isAlive) return;
    setPlayerHp(dmgAmount(playerHp));
  };

  const heal = () => {
    if (playerHp === 100 || playerHp === 0) return;
    setPlayerHp(healAmount(playerHp));
  };

  const reset = () => {
    setPlayerHp(100);
  };

  return (
    <div>
      <div className="mb-2 flex justify-center">
        {playerHp <= CRITICAL_HEALTH || playerHp < 0 ? (
          <div className="w-[96px] rounded border border-black bg-red-600 p-1 text-center">
            Low Hp!
          </div>
        ) : (
          <div className="w-[96px] rounded border border-black bg-green-600 p-1 text-center">
            Healthy
          </div>
        )}
      </div>
      <div className="flex justify-center gap-2">
        <div className="w-[100px] gap-2 rounded border border-black p-1 text-center">
          {isAlive ? 'Status: Alive' : 'Status: Dead'}
        </div>
        <div className="w-[140px] gap-2 rounded border border-black p-1 text-center">
          Player Health: {playerHp}
        </div>
        <button className="rounded border border-black p-1" onClick={fight}>
          Fight
        </button>
        <button className="rounded border border-black p-1" onClick={heal}>
          Heal
        </button>
        <button className="rounded border border-black p-1" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
