import { useMemo, useState } from 'react';

import ChooseYourWeapon from './ChooseYourWeapon';
import { aiNamesMap, type Weapons } from './Match.constants';
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
const AiMatch = ({ onWeaponSelect, name = 'Player 1' }: Props) => {
  const [playerWeapon, setPlayerWeapon] = useState<Weapons>();
  const [aiWeapon, setAiWeapon] = useState<Weapons>();

  const aiName = aiWeapon ? aiNamesMap[aiWeapon] || '' : '';

  const hasPlayerPlayed = !!playerWeapon;
  const hasOpponentPlayed = !!aiWeapon;

  const result = useMemo(() => {
    if (!(playerWeapon && aiWeapon)) {
      return undefined;
    }

    return getTheWinner(aiWeapon, playerWeapon);
  }, [playerWeapon, aiWeapon]);

  const handleWeaponSelect = (weapon: Weapons) => {
    const computerWeapon = letTheComputerPlay();
    setPlayerWeapon(weapon);
    setAiWeapon(computerWeapon);
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
          {aiName} chose {aiWeapon} {getOptionEmoji(aiWeapon)}
        </h2>
      )}
      {!!result && <Result status={result} opponentName={aiName} name={name} />}
    </>
  );
};

export default AiMatch;
