import unranked from './assets/unranked.webp';
import iron from './assets/iron.webp';
import bronze from './assets/bronze.webp';
import silver from './assets/silver.webp';
import gold from './assets/gold.webp';
import platinum from './assets/platinum.webp';
import emerald from './assets/emerald.webp';
import diamond from './assets/diamond.webp';
import master from './assets/master.webp';
import grandmaster from './assets/grandmaster.webp';
import challenger from './assets/challenger.webp';

export const RANKS_SOURCE_MAP = {
  Unranked: unranked,
  Iron: iron,
  Bronze: bronze,
  Silver: silver,
  Gold: gold,
  Platinum: platinum,
  Emerald: emerald,
  Diamond: diamond,
  Master: master,
  Grandmaster: grandmaster,
  Challenger: challenger,
};

export const RANKS_WITH_DIVISIONS = [
  'Iron',
  'Bronze',
  'Silver',
  'Gold',
  'Platinum',
  'Emerald',
  'Diamond',
];

export const MASTERS_PLUS = ['Master', 'Grandmaster', 'Challenger'];

export const RANKS = [...RANKS_WITH_DIVISIONS, ...MASTERS_PLUS];

export const LP_PER_DIVISION = 100;
export const DIVISIONS = 4;
export const MASTER_LP = DIVISIONS * LP_PER_DIVISION * 7;
export const GRANDMASTER_LP = MASTER_LP + 200;
export const CHALLENGER_LP = GRANDMASTER_LP + 300;

export const BASE_LP = 20;
