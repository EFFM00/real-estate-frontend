import FormMessage from '../../components/FormMessage/FormMessage';
import { DetailsContainer } from './style';
import PropDetailsComp from '../../components/PropDetailsComp/PropDetailsComp';
import ButtonLogoutComp from '../../components/ButtonLogoutComp/ButtonLogoutComp';
import { useState } from 'react';
import { useCatalogue } from '../../context/CatalogueProvider';

const PropDetails = () => {


    return(
        <DetailsContainer>
            <ButtonLogoutComp/>
            <PropDetailsComp />
            <FormMessage />
        </DetailsContainer>
    )

}

export default PropDetails