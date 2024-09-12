import {FC, ReactNode} from "react";

import {LayoutContainer} from "./Layout.styled";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({children}) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};
