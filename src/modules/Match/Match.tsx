import Link from 'next/link';
import { useMemo, useState } from 'react';
import Button from '~/components/Button';

import { tw } from '~/utils/tailwind';
import { opponentNamesMap, type Weapons } from './Match.constants';
import {
  getOptionEmoji,
  getResultMessage,
  getTheWinner,
  letTheComputerPlay,
} from './Match.utils';
import WeaponSelect from './WeaponSelect';

type Props = {
  name?: string;
};

const Match = ({ name = 'Player 1' }: Props) => {
  const [playerWeapon, setPlayerWeapon] = useState<Weapons>();
  const [opponentWeapon, setOpponentWeapon] = useState<Weapons>();

  const opponentName = opponentWeapon ? opponentNamesMap[opponentWeapon] : '';

  const result = useMemo(() => {
    if (playerWeapon && opponentWeapon) {
      const winner = getTheWinner(opponentWeapon, playerWeapon);
      if (winner === 'left') {
        return 'opponent';
      }
      if (winner === 'right') {
        return 'you';
      }
      return 'draw';
    }
    return undefined;
  }, [playerWeapon, opponentWeapon]);

  const handleClick = (option: Weapons) => {
    const computerWeapon = letTheComputerPlay();
    setPlayerWeapon(option);
    setOpponentWeapon(computerWeapon);
  };

  return (
    <>
      {!result && (
        <>
          <h1 className="text-5xl text-lime-500">
            Choose your weapon, {name}!
          </h1>
          <div className="flex w-full items-center justify-center">
            <WeaponSelect name="🤘" onClick={() => handleClick('rock')} />
            <WeaponSelect name="📄" onClick={() => handleClick('paper')} />
            <WeaponSelect name="✂️️️" onClick={() => handleClick('scissors')} />
          </div>
        </>
      )}
      {!!playerWeapon && (
        <h2 className="text-2xl text-amber-500">
          You selected {playerWeapon} {getOptionEmoji(playerWeapon)}
        </h2>
      )}
      {!!opponentWeapon && (
        <h2 className="text-2xl text-amber-300">
          {opponentName} chose {opponentWeapon} {getOptionEmoji(opponentWeapon)}
        </h2>
      )}
      {!!result && (
        <>
          <h1
            className={tw(
              'mt-10 text-5xl',
              result === 'draw' && 'text-blue-500',
              result === 'opponent' && 'text-red-500',
              result === 'you' && 'text-emerald-500'
            )}
          >
            {getResultMessage(result, name, opponentName)}
          </h1>
          <div className="mt-10">
            <Button>
              <Link href={'/'}>Play again</Link>
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default Match;
