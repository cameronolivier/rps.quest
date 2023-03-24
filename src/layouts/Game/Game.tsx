import Heading from '~/components/Heading';
import PageWrapper from '~/components/PageWrapper';
import AddUser from '../AddUser';

type Props = {
  id: string;
};
function Game({ id }: Props) {
  return (
    <PageWrapper>
      <Heading>Game id: {id}</Heading>
      <AddUser />
    </PageWrapper>
  );
}

export default Game;
