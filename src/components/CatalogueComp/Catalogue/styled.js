import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerCat = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;

    margin: 5rem 1.5rem 0 1.5rem;
`;

export const LinkProd = styled(Link)`
    text-decoration: none;
    color: gray;
`