import Head from 'next/head';

import Button from '~/components/Button';
import Heading from '~/components/Heading';
import PageWrapper from '~/components/PageWrapper';
import { api } from '~/utils/api.utils';

type Props = {
  onCreateGame: () => void;
};
export default function Home({ onCreateGame }: Props) {
  const createGame = api.games.create.useMutation();

  const handleCreateGame = () => {
    onCreateGame();
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
        <Heading>{`Let's play Rock Paper Scissors!`}</Heading>
        <Button onClick={handleCreateGame} disabled={createGame.isLoading}>
          {createGame.isLoading ? 'Creating game...' : `Create a Game`}
        </Button>
      </PageWrapper>
    </>
  );
}
