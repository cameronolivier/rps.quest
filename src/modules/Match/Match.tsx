import { type Weapons } from '@prisma/client';
import { useMemo } from 'react';

import ChooseYourWeapon from './ChooseYourWeapon';
import { getOptionEmoji, getTheWinner } from './Match.utils';
import Result from './Result';

export type Player = {
  name: string;
  weapon?: Weapons;
};
type Props = {
  onWeaponSelect: (weapon: Weapons) => void;
  opponent: Player;
  player: Player;
};
export default function Match({ onWeaponSelect, opponent, player }: Props) {
  const result = useMemo(() => {
    if (!(player.weapon && opponent.weapon)) {
      return undefined;
    }

    return getTheWinner(opponent.weapon, player.weapon);
  }, [player.weapon, opponent.weapon]);

  const handleWeaponSelect = (weapon: Weapons) => {
    onWeaponSelect(weapon);
  };

  return (
    <>
      {!result && (
        <ChooseYourWeapon
          name={player.name}
          handleWeaponSelect={handleWeaponSelect}
        />
      )}
      {!!player.weapon && (
        <h2 className="text-2xl text-amber-500">
          You selected {player.weapon} {getOptionEmoji(player.weapon)}
        </h2>
      )}
      {!!opponent.weapon && (
        <h2 className="text-2xl text-amber-300">
          {opponent.name} chose {opponent.weapon}{' '}
          {getOptionEmoji(opponent.weapon)}
        </h2>
      )}
      {!!result && (
        <Result
          status={result}
          opponentName={opponent.name}
          name={player.name}
        />
      )}
    </>
  );
}
