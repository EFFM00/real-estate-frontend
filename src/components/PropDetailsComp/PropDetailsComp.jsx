import { useEffect, useState } from 'react';
import { PropsContainer } from './style';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import axios from 'axios';
import { useCatalogue } from '../../context/CatalogueProvider';
import { useParams } from 'react-router-dom';
import { H1Login } from '../../pages/Login/styled';

const PropDetailsComp = () => {

    const { propertyId } = useParams();
    const {propsDetails, setPropDetails} = useCatalogue();
    const [images, setImages] = useState([])

    useEffect(() => {

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

            const arrImg = res.data.data.images.map(img => {
                return {
                    original: img.url_image,
                    thumbnail: img.url_image,
                }
            })

            const arrImgFinal = [
                {
                    original: res.data.data.main_image,
                    thumbnail: res.data.data.main_image,
                },
                ...arrImg
            ]

            setImages(arrImgFinal);
        }).catch(err => {
            console.log(err);
        })

    }, [])

    return(
        propsDetails && 
        <PropsContainer>
            <div>
                <H1Login>{propsDetails.title}</H1Login>
                {images && <Gallery key={images.length} itemWidth={40} itemHeight={34} items={images} />}
                <h2>{propsDetails.address}</h2>
                <h3>{propsDetails.description}</h3>
                <h3>
                    {propsDetails.operation.toUpperCase()}: ${propsDetails.price} {propsDetails.operation !== "sale" ? "per month" : ""} 
                </h3>
                
            
            </div>
        </PropsContainer>
    )

}

export default PropDetailsComp