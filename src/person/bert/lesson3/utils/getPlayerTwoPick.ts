import { OPTIONS } from "../constants";

export const getPlayerTwoPick = () => {
    const number = Math.floor(Math.random() * OPTIONS.length);
    return OPTIONS[number];
  };