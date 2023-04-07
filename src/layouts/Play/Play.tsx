import Heading from '~/components/Heading';
import PageWrapper from '~/components/PageWrapper';
import Match from '~/modules/Match';
import { type Weapons } from '~/modules/Match/Match.constants';

type Props = {
  slug: string;
  name: string;
  handleWeaponSelect: (weapon: Weapons) => void;
};
export default function Play({ slug, name, handleWeaponSelect }: Props) {
  return (
    <PageWrapper>
      <Heading>Game slug: {slug}</Heading>
      <Match name={name} onWeaponSelect={handleWeaponSelect} />
    </PageWrapper>
  );
}
