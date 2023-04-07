import { useMemo, useState } from 'react';

import ChooseYourWeapon from './ChooseYourWeapon';
import { opponentNamesMap, type Weapons } from './Match.constants';
import {
  getOptionEmoji,
  getTheWinner,
  letTheComputerPlay,
} from './Match.utils';
import Result from './Result';

type Props = {
  onWeaponSelect: (weapon: Weapons) => void;
  name?: string;
};
const Match = ({ onWeaponSelect, name = 'Player 1' }: Props) => {
  const [playerWeapon, setPlayerWeapon] = useState<Weapons>();
  const [opponentWeapon, setOpponentWeapon] = useState<Weapons>();

  const opponentName = opponentWeapon
    ? opponentNamesMap[opponentWeapon] || ''
    : '';

  const hasPlayerPlayed = !!playerWeapon;
  const hasOpponentPlayed = !!opponentWeapon;

  const result = useMemo(() => {
    if (!(playerWeapon && opponentWeapon)) {
      return undefined;
    }

    return getTheWinner(opponentWeapon, playerWeapon);
  }, [playerWeapon, opponentWeapon]);

  const handleWeaponSelect = (weapon: Weapons) => {
    const computerWeapon = letTheComputerPlay();
    setPlayerWeapon(weapon);
    setOpponentWeapon(computerWeapon);
    onWeaponSelect(weapon);
  };

  return (
    <>
      {!result && (
        <ChooseYourWeapon name={name} handleWeaponSelect={handleWeaponSelect} />
      )}
      {hasPlayerPlayed && (
        <h2 className="text-2xl text-amber-500">
          You selected {playerWeapon} {getOptionEmoji(playerWeapon)}
        </h2>
      )}
      {hasOpponentPlayed && (
        <h2 className="text-2xl text-amber-300">
          {opponentName} chose {opponentWeapon} {getOptionEmoji(opponentWeapon)}
        </h2>
      )}
      {!!result && (
        <Result status={result} opponentName={opponentName} name={name} />
      )}
    </>
  );
};

export default Match;
