import { useEffect } from "react";
import axios from "axios";
import PropItem from "../PropItem/PropItem";
import { ContainerCat, LinkProd } from "./styled";
import { useCatalogue } from "../../context/CatalogueProvider";

const CatalogueComp = () => {

    const {catalogue, setCatalogue} = useCatalogue();


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
                setCatalogue(res.data.data)
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
                        price={property.price}
                        />
                    </LinkProd>


                );
            })}
        </ContainerCat> 
    );
}

export default CatalogueComp