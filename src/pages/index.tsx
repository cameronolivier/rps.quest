import { useRouter } from 'next/router';

import Home from '~/layouts/Home';
import { api } from '~/utils/api.utils';

export default function HomePage() {
  const router = useRouter();

  const { mutate, isLoading } = api.games.create.useMutation();
  const handleCreateGame = () => {
    mutate(undefined, {
      onSuccess: (data) => {
        void router.push({
          pathname: '/game/[slug]',
          query: { slug: data.slug },
        });
      },
    });
  };
  return <Home onCreateGame={handleCreateGame} isCreatingGame={isLoading} />;
}
