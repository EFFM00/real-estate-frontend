import { createContext, useContext, useState } from "react";
import estate from "../static/estate.json";
import axios from "axios";

export const CatalogueContext = createContext()

export const CatalogueProvider = ({children}) => {

    const [catalogue, setCatalogue] = useState(estate);

    axios.get("https://api-real-estates.onrender.com/")
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    })

    console.log(children);
    return <CatalogueContext.Provider value={catalogue}>{children}</CatalogueContext.Provider>
}

export const useCatalogue = () => {
    return useContext(CatalogueContext)
}