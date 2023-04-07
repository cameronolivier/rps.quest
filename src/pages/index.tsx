import { useRouter } from 'next/router';

import Home from '~/layouts/Home';
import { api } from '~/utils/api.utils';

export default function HomePage() {
  const router = useRouter();

  const createGame = api.games.create.useMutation();
  const handleCreateGame = () => {
    createGame.mutate(undefined, {
      onSuccess: (data) => {
        console.log('data', data);
        void router.push({
          pathname: '/game/[slug]',
          query: { slug: data.slug },
        });
      },
    });
  };
  return <Home onCreateGame={handleCreateGame} />;
}
