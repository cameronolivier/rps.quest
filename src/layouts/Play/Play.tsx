import Heading from '~/components/Heading';
import PageWrapper from '~/components/PageWrapper';

import Match from '../../modules/Match';

type Props = {
  slug: string;
  name: string;
};
function Play({ slug, name }: Props) {
  return (
    <PageWrapper>
      <Heading>Game slug: {slug}</Heading>
      <Match name={name} />
    </PageWrapper>
  );
}

export default Play;
