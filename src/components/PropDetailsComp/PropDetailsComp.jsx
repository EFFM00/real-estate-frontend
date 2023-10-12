import { useEffect, useState } from 'react';
import { Address, DetailsCont, GalleryCont } from './style';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import axios from 'axios';
import { useCatalogue } from '../../context/CatalogueProvider';
import { useNavigate, useParams } from 'react-router-dom';
import { H1Login } from '../../pages/Login/styled';
import { useAuth } from '../../context/AuthProvider';
import formatNum from '../../utils/formatNum';

const PropDetailsComp = () => {

    const { propertyId } = useParams();
    const {propsDetails, setPropDetails} = useCatalogue();
    const {setLogged} = useAuth();
    const [images, setImages] = useState([])
    const navigate = useNavigate();

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

            if(res.data.message === "Invalid token") {
                localStorage.removeItem("token");
                setLogged(false);
                navigate("/login")
            } else {
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
            }

        }).catch(err => {
            console.log(err);
        })

    }, [])

    return(
        propsDetails && 
            <DetailsCont>
                <H1Login>{propsDetails.title}</H1Login>
                {images && 
                <GalleryCont>
                    <Gallery key={images.length} items={images} />
                </GalleryCont>
                }
                <Address>{propsDetails.address}</Address>
                <h3>{propsDetails.description}</h3>
                <h3>
                    {propsDetails?.operation?.toUpperCase()}: ${formatNum(propsDetails?.price)} {propsDetails?.operation !== "sale" ? "per month" : ""} 
                </h3>
                
            
            </DetailsCont>
    )

}

export default PropDetailsComp