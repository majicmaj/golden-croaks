import { DAMAGE_AMOUNT } from '../constants';

export const dmgAmount = (playerHp: number) => {
  return playerHp - DAMAGE_AMOUNT;
};
