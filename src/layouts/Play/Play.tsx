import Heading from '~/components/Heading';
import PageWrapper from '~/components/PageWrapper';
import Match from '~/modules/Match';
import { type Player } from '~/modules/Match/Match';
import { type Weapons } from '~/modules/Match/Match.constants';

type Props = {
  player: Player;
  opponent?: Player;
  handleWeaponSelect: (weapon: Weapons) => void;
};
export default function Play({ player, opponent, handleWeaponSelect }: Props) {
  return (
    <>
      <Heading>
        {player.name || 'Player 1'} vs {opponent?.name || '_________'}
      </Heading>
      <Match
        opponent={opponent}
        player={player}
        onWeaponSelect={handleWeaponSelect}
      />
    </>
  );
}
