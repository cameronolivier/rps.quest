import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
function Header({ children }: Props) {
  return <h1 className="mb-5 text-amber-500">{children}</h1>;
}

export default Header;
