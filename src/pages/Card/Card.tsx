import {CompanyInfo} from "components/CompanyInfo/CompanyInfo";
import {Footer} from "components/Footer/Footer";
import {Header} from "components/Header/Header";
import SearchMap from "components/SearchMap/SearchMap";

export const Card = () => {
  return (
    <>
      <Header />
      <CompanyInfo />
      <SearchMap />
      <Footer />
    </>
  );
};
