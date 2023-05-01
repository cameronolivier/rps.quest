import { useState } from 'react';

import Match, { type Player } from './Match';
import { aiNamesMap, type Weapons } from './Match.constants';
import { letTheComputerPlay } from './Match.utils';

type Props = {
  onWeaponSelect: (weapon: Weapons) => void;
  name?: string;
};

const ComputerMatch = ({ onWeaponSelect, name = 'Player 1' }: Props) => {
  const [opponent, setOpponent] = useState<Player>();
  const [playerWeapon, setPlayerWeapon] = useState<Weapons>();

  const player: Player = { name, weapon: playerWeapon };

  const handleWeaponSelect = (weapon: Weapons) => {
    const aiWeapon = letTheComputerPlay();
    const aiName = aiWeapon ? aiNamesMap[aiWeapon] || '' : '';
    setPlayerWeapon(weapon);
    setOpponent({ name: aiName, weapon: aiWeapon });
    onWeaponSelect(weapon);
  };

  return (
    <Match
      onWeaponSelect={handleWeaponSelect}
      opponent={opponent}
      player={player}
    />
  );
};

export default ComputerMatch;
