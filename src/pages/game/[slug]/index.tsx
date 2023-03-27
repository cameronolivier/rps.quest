import { useRouter } from 'next/router';

import Game from '~/layouts/Game';

function GamePage() {
  const router = useRouter();
  const slug = router.query.slug as string;

  return <Game slug={slug} />;
}

export default GamePage;
