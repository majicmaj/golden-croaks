import React from 'react';
import gold_icon from './assets/ui/gold_icon.png';

interface Sidebar {
  gold: number;
  setGold: React.Dispatch<React.SetStateAction<number>>;
  setWinrateMod: React.Dispatch<React.SetStateAction<number>>;
  setLp: React.Dispatch<React.SetStateAction<number>>;
  setWins: React.Dispatch<React.SetStateAction<number>>;
  play: () => void;
}
const Sidebar = ({ gold, setGold, setWinrateMod, setLp, play }: Sidebar) => {
  const [purchasedCount, setPurchasedCount] = React.useState({});
  const upgrades = [
    {
      name: 'Watch Pro VOD',
      cost: 10,
      description: '+0.1 Skill Mod',
      buy: () => {
        setGold((prev) => prev - 10);
        setWinrateMod((prev) => prev + 0.1);
      },
    },
    {
      name: 'Gacha Skin',
      cost: 10,
      description: '5% chance for +1000 gold',
      buy: () => {
        setGold((prev) => prev - 10);
        if (Math.random() > 0.95) {
          setGold((prev) => prev + 1000);
        }
      },
    },
    {
      name: 'Rage Queue',
      cost: 10,
      description: 'Play 10 games in a row',
      buy: () => {
        setGold((prev) => prev - 10);
        for (let i = 0; i < 10; i++) {
          play();
        }
      },
    },

    {
      name: 'Get Coaching',
      cost: 500,
      description: '+ (0-10) Skill mod',
      buy: () => {
        setGold((prev) => prev - 500);
        setWinrateMod((prev) => prev + Math.random() * 10);
      },
    },
    {
      name: 'Scripting',
      cost: 1000,
      description: '+10 Skill mod',
      buy: () => {
        setGold((prev) => prev - 1000);
        setWinrateMod((prev) => prev + 10);
      },
    },

    {
      name: 'Get boosted',
      cost: 1000,
      description: '+100 LP',
      buy: () => {
        if (gold >= 1000) {
          setGold((prev) => prev - 1000);
          setLp((prev) => prev + 100);
        }
      },
    },
  ];

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
