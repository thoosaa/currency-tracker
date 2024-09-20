import {FC, ReactNode} from "react";

import {CompanyInfo} from "components/CompanyInfo/CompanyInfo";
import {Footer} from "components/Footer/Footer";
import {Header} from "components/Header/Header";

interface PageTemplateProps {
  children: ReactNode;
}

export const PageTemplate: FC<PageTemplateProps> = ({children}) => {
  return (
    <>
      <Header />
      <CompanyInfo />
      {children}
      <Footer />
    </>
  );
};
