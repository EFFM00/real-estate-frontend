import FormMessage from '../../components/FormMessage/FormMessage';
import { DetailsContainer } from './style';
import { ButtonLogout } from '../../components/CatalogueComp/styled';
import PropDetailsComp from '../../components/PropDetailsComp/PropDetailsComp';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

const PropDetails = () => {

    const navigate = useNavigate();
    const {setLogged} = useAuth();


    const handleLogout = () => {
        localStorage.removeItem("token");
        setLogged(false);
        navigate("/")
    }

    return(
        <DetailsContainer>
            <ButtonLogout onClick={handleLogout}>Log out</ButtonLogout>
            <PropDetailsComp/>
            <FormMessage/>
        </DetailsContainer>
    )

}

export default PropDetails