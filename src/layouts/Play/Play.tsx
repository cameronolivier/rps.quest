import Heading from '~/components/Heading';
import PageWrapper from '~/components/PageWrapper';
import Match from '../../modules/Match';

type Props = {
  id: string;
  name: string;
};
function Play({ id, name }: Props) {
  return (
    <PageWrapper>
      <Heading>Game: {id}</Heading>
      <Match name={name} />
    </PageWrapper>
  );
}

export default Play;
