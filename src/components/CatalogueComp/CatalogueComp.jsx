import { useEffect } from "react";
import axios from "axios";
import PropItem from "../PropItem/PropItem";
import { ContainerCat, LinkProd } from "./styled";
import { useCatalogue } from "../../context/CatalogueProvider";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import formatNum from "../../utils/formatNum";

const CatalogueComp = () => {

    const {catalogue, setCatalogue} = useCatalogue();
    const {setLogged} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        if(catalogue.length === 0) {
            const url = "https://api-real-estates.onrender.com/api/properties"

            const token = localStorage.getItem("token");

            const headers = {
                headers: {
                    "Authorization": "Bearer " + JSON.parse(token)
                }
            }
            axios.get(url, headers)
            .then(res => {
                if(res.data.message === "Invalid token") {
                    localStorage.removeItem("token");
                    setLogged(false);
                    navigate("/")
                } else {
                    setCatalogue(res.data.data)
                }

            }).catch(err => {
                console.log(err);
            })
        }

    }, [])

    return (
        <ContainerCat>
            {catalogue?.map((property) => {
                return (

                    <LinkProd key={property.id} to={{
                        pathname: `/properties/${property.id}`,
                        state: { customProp: "someValue" }
                    }}>
                        <PropItem
                        key={property.id}
                        title={property.title}
                        main_image={property.main_image}
                        address={property.address}
                        price={formatNum(property.price)}
                        />
                    </LinkProd>


                );
            })}
        </ContainerCat> 
    );
}

export default CatalogueComp