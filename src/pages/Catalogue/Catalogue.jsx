import { useEffect } from "react";
import { useCatalogue } from "../../context/CatalogueProvider";
import axios from "axios";

const Catalogue = () => {

    const {catalogue, setCatalogue} = useCatalogue();

    useEffect(() => {

        if(!catalogue) {
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
        <>
            {catalogue && catalogue.map((property) => {
                return (
                    <div key={property.id}>
                        <h2>{property.title}</h2>
                        <img src={property.url_img}/>
                        <h3>{property.address}</h3>
                        <p>{property.description}</p>
                        <p>${property.price}</p>
                    </div>
                );
            })}
        </>
    );
}

export default Catalogue