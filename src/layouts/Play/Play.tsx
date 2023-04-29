import Heading from '~/components/Heading';
import PageWrapper from '~/components/PageWrapper';
import Match from '~/modules/Match';
import { type Player } from '~/modules/Match/Match';
import { type Weapons } from '~/modules/Match/Match.constants';

type Props = {
  slug: string;
  player: Player;
  opponent: Player;
  handleWeaponSelect: (weapon: Weapons) => void;
};
export default function Play({
  slug,
  player,
  opponent,
  handleWeaponSelect,
}: Props) {
  return (
    <PageWrapper>
      <Heading>Game slug: {slug}</Heading>
      <Match
        opponent={opponent}
        player={player}
        onWeaponSelect={handleWeaponSelect}
      />
    </PageWrapper>
  );
}
