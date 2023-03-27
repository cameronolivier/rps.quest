import { weaponEmojiMap, type Weapons } from './Match.constants';

export const letTheComputerPlay = (): Weapons => {
  const compThrow = Math.floor(Math.random() * 100);
  if (compThrow < 33) {
    return 'rock';
  }
  if (compThrow < 66) {
    return 'paper';
  }
  return 'scissors';
};

export const getOptionEmoji = (weapon: Weapons) => weaponEmojiMap[weapon];

export const getTheWinner = (
  left: Weapons,
  right: Weapons
): 'left' | 'right' | 'none' => {
  if (left === 'rock' && right === 'paper') {
    return 'right';
  }
  if (left === 'rock' && right === 'scissors') {
    return 'left';
  }
  if (left === 'paper' && right === 'rock') {
    return 'left';
  }
  if (left === 'paper' && right === 'scissors') {
    return 'right';
  }
  if (left === 'scissors' && right === 'rock') {
    return 'right';
  }
  if (left === 'scissors' && right === 'paper') {
    return 'left';
  }
  return 'none';
};

export const getResultMessage = (
  result: 'draw' | 'opponent' | 'you',
  name: string | undefined,
  opponent: string
) => {
  if (result === 'opponent') {
    return `${opponent} won!`;
  }
  if (result === 'you') {
    return `${name || 'you'} won!`;
  }
  return `It's a draw!`;
};
