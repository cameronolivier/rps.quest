import { useRouter } from 'next/router';

import Play from '~/layouts/Play';

function PlayPage() {
  const router = useRouter();
  const { slug, name } = router.query as { slug: string; name: string };

  return <Play slug={slug} name={name} />;
}

export default PlayPage;
