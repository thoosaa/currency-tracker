import {CompanyInfo} from "components/CompanyInfo/CompanyInfo";
import {Footer} from "components/Footer/Footer";
import {Header} from "components/Header/Header";
import {QuoteBlock} from "components/QuoteBlock/QuoteBlock";

export const Home = () => {
  return (
    <>
      <Header />
      <CompanyInfo />
      <QuoteBlock />
      <Footer />
    </>
  );
};
