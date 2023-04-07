import { useRouter } from 'next/router';

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
            query: { slug, name: data.name, userGameId: data.userGameId },
          });
        },
      }
    );
  };
  return (
    <Game
      slug={slug}
      isLoading={createUser.isLoading}
      onUserCreate={onUserCreate}
    />
  );
}
