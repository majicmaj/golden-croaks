import { WIN_MESSAGE } from '../constants';

export const getWinMessage = (a: number, b: number) => {
  if (a === 0) return WIN_MESSAGE.player_two;
  if (b === 0) return WIN_MESSAGE.player_one;
  return '';
};
