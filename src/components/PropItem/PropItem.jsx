import { Container, Img } from "./styled";

const PropItem = ({
    id,
    title,
    main_image,
    address,
    price
}) => {

    return (
        <Container key={id}>
            <Img src={main_image} />
            <h3>{title}</h3>
            <h5>{address}</h5>
            <h5>{price}</h5>
        </Container>
    )
    
}

export default PropItem;