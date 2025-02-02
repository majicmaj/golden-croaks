import React from 'react';
import gold_icon from './assets/ui/gold_icon.png';
import { getUpgrades } from './utils';

interface Sidebar {
  gold: number;
  setGold: React.Dispatch<React.SetStateAction<number>>;
  setWinrateMod: React.Dispatch<React.SetStateAction<number>>;
  setLp: React.Dispatch<React.SetStateAction<number>>;
  setWins: React.Dispatch<React.SetStateAction<number>>;
  play: () => void;
}

const Sidebar = ({ gold, setGold, setWinrateMod, setLp, play }: Sidebar) => {
  const upgrades = getUpgrades({
    setGold,
    setWinrateMod,
    setLp,
    play,
  });

  return (
    <div className="grid w-[300px] gap-4">
      {upgrades.map((upgrade, i) => (
        <div key={i} className="flex flex-col gap-2">
          <button
            disabled={gold < upgrade.cost}
            className="flex flex-col justify-between gap-0 rounded border-2 border-teal-500 bg-slate-800 p-2 px-3 text-white disabled:opacity-50"
            onClick={upgrade.buy}
          >
            <div className="flex w-full justify-between">
              <span>{upgrade.name}</span>
              <span className="flex gap-1 text-sm">
                <img src={gold_icon} alt="gold" />
                {upgrade.cost}
              </span>
            </div>
            <span className="text-sm italic opacity-70">
              {upgrade.description}
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
