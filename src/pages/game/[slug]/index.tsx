import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import Game from '~/layouts/Game';
import { api } from '~/utils/api.utils';

export default function GamePage() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const createUser = api.users.create.useMutation();
  const onUserCreate = (name: string) => {
    createUser.mutate(
      { name, slug },
      {
        onSuccess: (data) => {
          console.log('data', data);
          void router.push({
            pathname: '/game/[slug]/play',
            query: { slug, userId: data.userId, userGameId: data.userGameId },
          });
        },
        onError: (error) => {
          console.log('error', { error });
          toast.error(
            error?.shape?.message || 'There was an error creating your user'
          );
        },
      }
    );
  };
  return <Game isLoading={createUser.isLoading} onUserCreate={onUserCreate} />;
}
