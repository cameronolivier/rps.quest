import { type weaponEmojiMap } from '../Match.constants';

export type Props = {
  name: (typeof weaponEmojiMap)[keyof typeof weaponEmojiMap];
  label: string;
  onClick: (option: string) => void;
};
const WeaponSelect = ({ name, label, onClick }: Props) => (
  <span
    className="m-5 cursor-grab rounded border border-lime-500 bg-lime-500/10 p-5 text-center text-6xl transition-colors hover:bg-lime-500/30 active:cursor-grabbing"
    onClick={() => onClick(name)}
  >
    {name}
    <span className="mt-1 block text-xs text-lime-500">{label}</span>
  </span>
);
export default WeaponSelect;
