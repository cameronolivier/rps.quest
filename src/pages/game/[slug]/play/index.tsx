import { useRouter } from 'next/router';
import { useState } from 'react';
import toast from 'react-hot-toast';

import Button from '~/components/Button';
import Heading from '~/components/Heading';
import Play, { PlayComputer } from '~/layouts/Play';
import { type Weapons } from '~/modules/Match/Match.constants';
import { api } from '~/utils/api.utils';
import { tw } from '~/utils/tailwind.utils';

export default function PlayPage() {
  const router = useRouter();
  const { slug, userId, userGameId } = router.query as {
    slug: string;
    userId: string;
    userGameId: string;
  };
  const [isComputer, setIsComputer] = useState<boolean>();
  const { data } = api.userGames.getGameUsers.useQuery({
    userGameId,
    playerId: userId,
  });

  const updateUserGame = api.userGames.update.useMutation();
  const handleWeaponSelect = (weapon: Weapons) => {
    updateUserGame.mutate(
      {
        userGameId,
        weapon,
      },

      {
        onError: (error) => {
          const errorMessage = error.data?.zodError?.fieldErrors?.weapon?.[0];
          toast.error(errorMessage || 'an error occurred');
        },
      }
    );
  };

  if (isComputer === undefined && !data?.player.weapon) {
    return (
      <>
        <Heading>Select a game mode</Heading>
        <div
          className={tw('mt-2 flex w-1/2 flex-col justify-center space-x-2')}
        >
          <Button onClick={() => setIsComputer(false)}>2 Player Mode</Button>
          <p className={tw('my-3 text-center text-violet-400')}>OR</p>
          <Button onClick={() => setIsComputer(true)}>vs Math.random()</Button>
        </div>
      </>
    );
  }

  return (
    <>
      {isComputer && data?.player && (
        <PlayComputer
          slug={slug}
          name={data.player.name || 'Player 1'}
          handleWeaponSelect={handleWeaponSelect}
        />
      )}
      {!isComputer && data?.player && (
        <Play
          player={{
            name: data.player.name || 'Player 1',
            weapon:
              data.player.weapon ?? (updateUserGame.data?.weapon || undefined),
          }}
          opponent={data.opponent}
          handleWeaponSelect={handleWeaponSelect}
        />
      )}
    </>
  );
}
