export const weapons = {
  rock: 'ROCK',
  paper: 'PAPER',
  scissors: 'SCISSORS',
} as const;
export type Weapons = (typeof weapons)[keyof typeof weapons];

export const resultStatus = {
  draw: 'DRAW',
  win: 'WIN',
  lose: 'LOSE',
} as const;
export type ResultStatus = (typeof resultStatus)[keyof typeof resultStatus];

export const weaponEmojiMap: Record<Weapons, string> = {
  [weapons.rock]: '🤘',
  [weapons.paper]: '📄',
  [weapons.scissors]: '✂️️️',
};

export const opponentNamesMap: Record<Weapons, string> = {
  [weapons.rock]: 'Dwayne',
  [weapons.paper]: 'Michael',
  [weapons.scissors]: 'Edward',
};
