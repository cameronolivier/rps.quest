import Heading from '~/components/Heading';
import PageWrapper from '~/components/PageWrapper';
import AddUser from '~/modules/AddUser';

type Props = {
  slug: string;
};
function Game({ slug }: Props) {
  return (
    <PageWrapper>
      <Heading>Game slug: {slug}</Heading>
      <AddUser slug={slug} />
    </PageWrapper>
  );
}

export default Game;
