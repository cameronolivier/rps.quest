import { useState } from 'react';

import Heading from '~/components/Heading';
import { ComputerMatch } from '~/modules/Match';
import { type Weapons } from '~/modules/Match/Match.constants';

type Props = {
  name: string;
  handleWeaponSelect: (weapon: Weapons) => void;
};
export default function PlayComputer({ name, handleWeaponSelect }: Props) {
  const [opponent, setOpponent] = useState<string>();
  return (
    <>
      <Heading>
        {name || 'Player 1'} vs {opponent || '_________'}
      </Heading>
      <ComputerMatch
        name={name}
        onWeaponSelect={handleWeaponSelect}
        onSetOpponent={setOpponent}
      />
    </>
  );
}
