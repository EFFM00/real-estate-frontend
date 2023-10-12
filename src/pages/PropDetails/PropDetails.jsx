import FormMessage from '../../components/FormMessage/FormMessage';
import { DetailsContainer } from './style';
import PropDetailsComp from '../../components/PropDetailsComp/PropDetailsComp';
import ButtonLogoutComp from '../../components/ButtonLogoutComp/ButtonLogoutComp';

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