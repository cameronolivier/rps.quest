import { useRouter } from 'next/router';
import { useState } from 'react';
import toast from 'react-hot-toast';

import { PlayComputer } from '~/layouts/Play';
import { type Weapons } from '~/modules/Match/Match.constants';
import { api } from '~/utils/api.utils';

import Button from '../../../../components/Button';
import Heading from '../../../../components/Heading';
import PageWrapper from '../../../../components/PageWrapper';

export default function PlayPage() {
  const router = useRouter();
  const { slug, name, userGameId } = router.query as {
    slug: string;
    name: string;
    userGameId: string;
  };
  const [isComputer, setIsComputer] = useState<boolean>();

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

  if (isComputer === undefined) {
    return (
      <PageWrapper>
        <Heading>Select a game mode</Heading>
        <div className="flex w-1/2 flex-row justify-center space-x-2">
          <Button onClick={() => setIsComputer(true)}>vs computer</Button>
          <Button onClick={() => setIsComputer(false)}>2 player</Button>
        </div>
      </PageWrapper>
    );
  }

  return (
    <>
      {isComputer && (
        <PlayComputer
          slug={slug}
          name={name}
          handleWeaponSelect={handleWeaponSelect}
        />
      )}
      {!isComputer && (
        <PlayComputer
          slug={slug}
          name={name}
          handleWeaponSelect={handleWeaponSelect}
        />
      )}
    </>
  );
}
