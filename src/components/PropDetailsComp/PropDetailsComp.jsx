import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCatalogue } from '../../context/CatalogueProvider';
import axios from 'axios';
import { PropsContainer } from './style';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const PropDetailsComp = () => {

    const { propertyId } = useParams();
    const {propsDetails, setPropDetails} = useCatalogue();
    const [images, setImages] = useState([])


    useEffect(() => {

        console.log("ADSADAS", images);

    }, [images])


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
                console.log("AAAAAA", arrImgFinal);

                setImages(arrImgFinal);
            }).catch(err => {
                console.log(err);
            })
        }

    }, [])


    return(
        propsDetails && 
        <PropsContainer>
            <div>
                <h1>{propsDetails.title}</h1>
                <Gallery itemWidth={40} itemHeight={34} items={images} />        

            </div>
        </PropsContainer>
    )

}

export default PropDetailsComp