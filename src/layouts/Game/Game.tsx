import Heading from '~/components/Heading';
import PageWrapper from '~/components/PageWrapper';
import Match from '~/modules/Match';

type Props = {
  id: string;
};
function Game({ id }: Props) {
  return (
    <PageWrapper>
      <Heading>Game: {id}</Heading>
      <Match />
    </PageWrapper>
  );
}

export default Game;
