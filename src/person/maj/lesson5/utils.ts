import {
  CHALLENGER_LP,
  GRANDMASTER_LP,
  MASTER_LP,
  RANKS_WITH_DIVISIONS,
  LP_PER_DIVISION,
  DIVISIONS,
} from './constant';

export const getRank = (lp: number) => {
  if (lp >= CHALLENGER_LP) return 'Challenger';
  if (lp >= GRANDMASTER_LP) return 'Grandmaster';
  if (lp >= MASTER_LP) return 'Master';
  return RANKS_WITH_DIVISIONS[Math.floor(lp / LP_PER_DIVISION / DIVISIONS)];
};

export const getDivision = (lp: number) => {
  if (lp >= CHALLENGER_LP) return 0;
  if (lp >= GRANDMASTER_LP) return 0;
  if (lp >= MASTER_LP) return 0;
  return (Math.floor(lp / LP_PER_DIVISION) % DIVISIONS) + 1;
};

export const getRomanNumeral = (n: number) => {
  if (n === 0) return '';
  const romanNumerals = ['I', 'II', 'III', 'IV'].reverse();
  return romanNumerals[n - 1];
};

export const getFullRank = (lp: number) => {
  const rank = getRank(lp);
  const division = getRomanNumeral(getDivision(lp));
  return `${rank} ${division}`;
};

export const getUpgrades = ({
  setGold,
  setWinrateMod,
  setLp,
  play,
}: {
  setGold: React.Dispatch<React.SetStateAction<number>>;
  setWinrateMod: React.Dispatch<React.SetStateAction<number>>;
  setLp: React.Dispatch<React.SetStateAction<number>>;
  play: () => void;
}) => [
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
      setGold((prev) => prev - 1000);
      setLp((prev) => prev + 100);
    },
  },
];
