import { weapons, type Weapons } from '~/modules/Match/Match.constants';
import WeaponSelect from '~/modules/Match/WeaponSelect';

type Props = {
  name: string;
  handleWeaponSelect: (weapon: Weapons) => void;
};
export default function ChooseYourWeapon({ name, handleWeaponSelect }: Props) {
  return (
    <>
      <h1 className="text-5xl text-lime-500">Choose your weapon, {name}!</h1>
      <div className="flex w-full items-center justify-center">
        <WeaponSelect
          name="🤘"
          label={weapons.rock}
          onClick={() => handleWeaponSelect(weapons.rock)}
        />
        <WeaponSelect
          name="📄"
          label={weapons.paper}
          onClick={() => handleWeaponSelect(weapons.paper)}
        />
        <WeaponSelect
          name="✂️️️"
          label={weapons.scissors}
          onClick={() => handleWeaponSelect(weapons.scissors)}
        />
      </div>
    </>
  );
}
