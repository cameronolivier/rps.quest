import { useRouter } from 'next/router';
import Play from '~/layouts/Play';

function PlayPage() {
  const router = useRouter();
  const { id, name } = router.query;

  return <Play id={id as string} name={name as string} />;
}

export default PlayPage;
