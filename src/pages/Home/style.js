import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeCont = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('../../../public/builds.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
`;

export const H1 = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    margin: 15% 1rem 0 1rem;

    @media (min-width: 768px) {
        font-size: 5rem;
        margin-top: 5rem;
    }
`;

export const Button = styled.button`
    margin-top: 2rem;
    padding: 1rem 2rem;
    background-color: #1e3a5f;
    border: none;
    color: #fff;
    border-radius: 50px;

    &:hover {
        cursor: pointer;
        background-color: #567b9c;
    }

    @media (min-width: 768px) {
        padding: 1rem 4rem;
        
    }
`;

export const LinkStyle = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 1rem;

    @media (min-width: 768px) {
        font-size: 2rem;
    }
`;

export const P = styled.p`
    color: #fff;
    position: absolute;
    font-weight: 900;
    font-size: 1rem;
    bottom: 5px;
    left: 10px;
`
