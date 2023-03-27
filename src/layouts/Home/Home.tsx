import Head from 'next/head';
import { useRouter } from 'next/router';

import Button from '~/components/Button';
import Heading from '~/components/Heading';
import PageWrapper from '~/components/PageWrapper';
import { api } from '~/utils/api';

export default function Home() {
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

  return (
    <>
      <Head>
        <title>
          Rock Paper Scissors Tournament. May your rocks be hard and your paper
          suffocating; your scissors forever sharp.
        </title>
        <meta
          name="description"
          content="Rock Paper Scissors Tournament.May your rocks be hard and your paper suffocating; your scissors forever sharp."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <Heading>Please create a new game to continue</Heading>
        <Button onClick={handleCreateGame}>Let's Play!</Button>
      </PageWrapper>
    </>
  );
}
