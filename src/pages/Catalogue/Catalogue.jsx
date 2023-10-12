import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { ButtonLogout, H1List } from "../../components/CatalogueComp/styled";
import CatalogueComp from "../../components/CatalogueComp/CatalogueComp";

const Catalogue = () => {

    const {setLogged} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("token");
        setLogged(false);
        navigate("/")
    }

    return(
        <>
            <ButtonLogout onClick={handleLogout}>Log out</ButtonLogout>
            <H1List>Search your next inversion in Argentina</H1List>
            <CatalogueComp />
        </>
    )
}

export default Catalogue