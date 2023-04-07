import Heading from '~/components/Heading';
import PageWrapper from '~/components/PageWrapper';
import AddUser from '~/modules/AddUser';

type Props = {
  slug: string;
  onUserCreate: (name: string) => void;
  isLoading: boolean;
};
export default function Game({ slug, onUserCreate, isLoading }: Props) {
  return (
    <PageWrapper>
      <Heading>Game slug: {slug}</Heading>
      <AddUser onUserCreate={onUserCreate} isLoading={isLoading} />
    </PageWrapper>
  );
}
