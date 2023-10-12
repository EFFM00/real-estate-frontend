import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCatalogue } from '../../context/CatalogueProvider';
import axios from 'axios';
import FormMessage from '../../components/FormMessage/FormMessage';

const PropDetails = () => {

    const { propertyId } = useParams();
    const {propsDetails, setPropDetails} = useCatalogue();

    useEffect(() => {

        if(Object.keys(propsDetails).length === 0) {
            const url = "https://api-real-estates.onrender.com/api/properties/" + propertyId

            const token = localStorage.getItem("token");

            const headers = {
                headers: {
                    "Authorization": "Bearer " + JSON.parse(token)
                }
            }
            axios.get(url, headers)
            .then(res => {
                setPropDetails(res.data.data)
            }).catch(err => {
                console.log(err);
            })
        }

    }, [])


    return(
        <>
            <h1>{propertyId}</h1>
            <FormMessage/>
        </>
    )

}

export default PropDetails