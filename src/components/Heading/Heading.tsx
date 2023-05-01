import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
function Heading({ children }: Props) {
  return <h1 className="mb-3 text-amber-500">{children}</h1>;
}

export default Heading;
