import { Address, Container, H3, Img, Price } from "./styled";

const PropItem = ({ id, title, main_image, address, price }) => {
  return (
    <Container key={id}>
      <Img src={main_image} />
      <H3>{title}</H3>
      <Address>{address}</Address>
      <Price>USD ${price}</Price>
    </Container>
  );
};

export default PropItem;
