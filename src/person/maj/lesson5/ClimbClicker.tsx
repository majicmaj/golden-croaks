import { useState } from 'react';
import RankBadge from './RankBadge';

const RANKS_WITH_DIVISIONS = [
  'Iron',
  'Bronze',
  'Silver',
  'Gold',
  'Platinum',
  'Emerald',
  'Diamond',
];

// const MASTERS_PLUS = ['Master', 'Grandmaster', 'Challenger'];

const LP_PER_DIVISION = 100;
const DIVISIONS = 4;
const MASTER_LP = DIVISIONS * LP_PER_DIVISION * 7;
const GRANDMASTER_LP = MASTER_LP + 200;
const CHALLENGER_LP = GRANDMASTER_LP + 300;

const BASE_LP = 20;

// All ranks are 100 LP apart, except challenger is 300 LP away from Grandmaster
const getRank = (lp: number) => {
  if (lp >= CHALLENGER_LP) return 'Challenger';
  if (lp >= GRANDMASTER_LP) return 'Grandmaster';
  if (lp >= MASTER_LP) return 'Master';
  return RANKS_WITH_DIVISIONS[Math.floor(lp / LP_PER_DIVISION / DIVISIONS)];
};

const getDivision = (lp: number) => {
  if (lp >= CHALLENGER_LP) return 0;
  if (lp >= GRANDMASTER_LP) return 0;
  if (lp >= MASTER_LP) return 0;
  return (Math.floor(lp / LP_PER_DIVISION) % DIVISIONS) + 1;
};

const getRomanNumeral = (n: number) => {
  if (n === 0) return '';
  const romanNumerals = ['I', 'II', 'III', 'IV'];
  return romanNumerals[n - 1];
};

const LeagueOfLegendsClimbClicker = () => {
  const [lp, setLp] = useState(0);

  const rank = getRank(lp);
  const division = getRomanNumeral(getDivision(lp));

  const randomWinLossMod = Math.random() > 0.5 ? 1 : -1;
  const lpPerGame = (BASE_LP + (Math.random() * 10 - 10)) * randomWinLossMod;

  const play = () => {
    setLp(lp + lpPerGame);
  };

  return (
    <div className="grid h-full place-items-center gap-2 font-serif text-xl">
      <RankBadge rank={rank} division={division} lp={lp} />

      <button className="relative grid h-12 w-40 place-items-center">
        <div
          className="h-full w-full border-[3.5px] border-b-[4px] border-t-[3px] border-teal-500 bg-slate-800 transition-all hover:brightness-150"
          style={{
            transform: 'perspective(100px) rotateX(-30deg)',
          }}
        />
        <div className="absolute" onClick={play}>
          PLAY
        </div>
      </button>
    </div>
  );
};

export default LeagueOfLegendsClimbClicker;
