import { type weaponEmojiMap } from '../Match.constants';

export type Props = {
  name: (typeof weaponEmojiMap)[keyof typeof weaponEmojiMap];
  onClick: (option: string) => void;
};
const WeaponSelect = ({ name, onClick }: Props) => (
  <span
    className="m-5 cursor-pointer rounded border border-lime-500 p-5 text-center text-6xl"
    onClick={() => onClick(name)}
  >
    {name}
  </span>
);
export default WeaponSelect;
