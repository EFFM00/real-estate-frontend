import { H1List } from "../../components/CatalogueComp/styled";
import CatalogueComp from "../../components/CatalogueComp/CatalogueComp";
import ButtonLogoutComp from "../../components/ButtonLogoutComp/ButtonLogoutComp";

const Catalogue = () => {
  return (
    <>
      <ButtonLogoutComp />
      <H1List>Search for your next investment opportunity in Argentina</H1List>
      <CatalogueComp />
    </>
  );
};

export default Catalogue;
