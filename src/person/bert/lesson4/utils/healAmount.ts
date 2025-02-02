import { HEAL_AMOUNT } from '../constants';

export const healAmount = (playerHp: number) => {
  return playerHp + HEAL_AMOUNT;
};
