import Head from 'next/head';

import Button from '~/components/Button';
import Heading from '~/components/Heading';

import { tw } from '../../utils/tailwind.utils';

type Props = {
  onCreateGame: () => void;
  isCreatingGame: boolean;
};
export default function Home({ onCreateGame, isCreatingGame }: Props) {
  const handleCreateGame = () => {
    onCreateGame();
  };

  return (
    <div className={tw('flex flex-col items-center')}>
      <Head>
        <title>
          Rock, Paper, Scissors Tournament. May your rocks be hard and your
          paper suffocating; your scissors forever sharp.
        </title>
        <meta
          name="description"
          content="Rock Paper Scissors Tournament.May your rocks be hard and your paper suffocating; your scissors forever sharp."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>Let&apos;s play Rock, Paper, Scissors!</Heading>
      <Button onClick={handleCreateGame} disabled={isCreatingGame}>
        {isCreatingGame ? 'Creating game...' : `New Game`}
      </Button>
    </div>
  );
}
