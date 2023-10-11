import { useEffect } from "react";
import { useCatalogue } from "../../context/CatalogueProvider";
import axios from "axios";
import PropItem from "../../components/PropItem/PropItem";
import { ContainerCat } from "./styled";
import { Link } from "react-router-dom";

const Catalogue = () => {

    const {catalogue, setCatalogue} = useCatalogue();

    useEffect(() => {

        console.log("CATALOGUE", catalogue);

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
                console.log(res.data);
                setCatalogue(res.data.data)
            })
        }

    }, [])


    return (
        <ContainerCat>
            {catalogue?.map((property) => {
                return (


                    <Link key={property.id} to={{
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
                    </Link>


                );
            })}
        </ContainerCat>
    );
}

export default Catalogue