import { createContext, useContext, useState } from "react";
import estate from "../static/estate.json";

export const CatalogueContext = createContext()

export const CatalogueProvider = ({children}) => {

    const [catalogue, setCatalogue] = useState(estate);

    console.log(children);
    return <CatalogueContext.Provider value={catalogue}>{children}</CatalogueContext.Provider>
}

export const useCatalogue = () => {
    return useContext(CatalogueContext)
}