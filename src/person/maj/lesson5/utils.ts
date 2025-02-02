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
