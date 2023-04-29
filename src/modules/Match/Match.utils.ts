import { type Weapons } from '@prisma/client';

import {
  resultStatus,
  weaponEmojiMap,
  weapons,
  type ResultStatus,
} from './Match.constants';

export const letTheComputerPlay = (): Weapons => {
  const compThrow = Math.floor(Math.random() * 100);
  if (compThrow < 33) {
    return weapons.rock;
  }
  if (compThrow < 66) {
    return weapons.paper;
  }
  return weapons.scissors;
};

export const getOptionEmoji = (weapon: Weapons) => weaponEmojiMap[weapon];

export const getTheWinner = (opponent: Weapons, you: Weapons): ResultStatus => {
  if (opponent === weapons.rock && you === weapons.paper) {
    return resultStatus.win;
  }
  if (opponent === weapons.rock && you === weapons.scissors) {
    return resultStatus.lose;
  }
  if (opponent === weapons.paper && you === weapons.rock) {
    return resultStatus.lose;
  }
  if (opponent === weapons.paper && you === weapons.scissors) {
    return resultStatus.win;
  }
  if (opponent === weapons.scissors && you === weapons.rock) {
    return resultStatus.win;
  }
  if (opponent === weapons.scissors && you === weapons.paper) {
    return resultStatus.lose;
  }
  return resultStatus.draw;
};

export const getResultMessage = (
  result: ResultStatus,
  name: string | undefined,
  opponent: string
) => {
  if (result === resultStatus.lose) {
    return `${opponent} won!`;
  }
  if (result === resultStatus.win) {
    return `${name || 'you'} won!`;
  }
  return `It's a draw!`;
};
