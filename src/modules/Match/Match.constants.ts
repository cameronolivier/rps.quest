export const weapons = {
  rock: 'rock',
  paper: 'paper',
  scissors: 'scissors',
};
export type Weapons = keyof typeof weapons;

export const weaponEmojiMap: Record<Weapons, string> = {
  rock: '🤘',
  paper: '📄',
  scissors: '✂️️️',
};

export const opponentNamesMap: Record<Weapons, string> = {
  rock: 'Dwayne',
  paper: 'Michael',
  scissors: 'Edward',
};
