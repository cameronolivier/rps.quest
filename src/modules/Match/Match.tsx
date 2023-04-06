import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';

import Button from '~/components/Button';
import { api } from '~/utils/api';
import { tw } from '~/utils/tailwind';

import { opponentNamesMap, weapons, type Weapons } from './Match.constants';
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
  const router = useRouter();
  const userGameId = router.query.userGameId as string;
  const [playerWeapon, setPlayerWeapon] = useState<Weapons>();
  const [opponentWeapon, setOpponentWeapon] = useState<Weapons>();
  const updateUserGame = api.userGames.update.useMutation();

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

  const handleClick = (weapon: Weapons) => {
    const computerWeapon = letTheComputerPlay();
    setPlayerWeapon(weapon);
    setOpponentWeapon(computerWeapon);

    updateUserGame.mutate(
      {
        userGameId,
        weapon,
      },

      {
        onError: (error) => {
          const errorMessage = error.data?.zodError?.fieldErrors?.weapon?.[0];
          if (errorMessage) {
            toast.error(errorMessage);
          } else {
            toast.error('an error occurred');
          }
        },
      }
    );
  };

  return (
    <>
      {!result && (
        <>
          <h1 className="text-5xl text-lime-500">
            Choose your weapon, {name}!
          </h1>
          <div className="flex w-full items-center justify-center">
            <WeaponSelect name="🤘" onClick={() => handleClick(weapons.rock)} />
            <WeaponSelect
              name="📄"
              onClick={() => handleClick(weapons.paper)}
            />
            <WeaponSelect
              name="✂️️️"
              onClick={() => handleClick(weapons.scissors)}
            />
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
