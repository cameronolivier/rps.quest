import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import Play from '~/layouts/Play';
import { type Weapons } from '~/modules/Match/Match.constants';
import { api } from '~/utils/api.utils';

export default function PlayPage() {
  const router = useRouter();
  const { slug, name, userGameId } = router.query as {
    slug: string;
    name: string;
    userGameId: string;
  };
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

  return (
    <Play slug={slug} name={name} handleWeaponSelect={handleWeaponSelect} />
  );
}
