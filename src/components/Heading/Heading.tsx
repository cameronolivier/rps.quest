import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
function Heading({ children }: Props) {
  return (
    <h1 className="m-4 scroll-m-20 text-3xl font-extrabold tracking-tight text-violet-300 lg:text-4xl">
      {children}
    </h1>
  );
}

export default Heading;
