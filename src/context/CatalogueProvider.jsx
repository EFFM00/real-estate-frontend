import { createContext, useContext, useState } from "react";

export const CatalogueContext = createContext()

export const CatalogueProvider = ({children}) => {

    const [catalogue, setCatalogue] = useState([]);
    const [propsDetails, setPropDetails] = useState({});

    console.log(children);
    return <CatalogueContext.Provider value={{catalogue, setCatalogue, propsDetails, setPropDetails}}>{children}</CatalogueContext.Provider>
}

export const useCatalogue = () => {
    return useContext(CatalogueContext)
}