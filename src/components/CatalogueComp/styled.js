import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerCat = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
  padding: 0rem 1.5rem 4rem 1.5rem;
`;

export const LinkProd = styled(Link)`
  text-decoration: none;
  color: gray;
`;
export const H1List = styled.h1`
  color: #237ac6;
  font-size: 2rem;
  text-align: center;
  padding: 6rem 0 3rem 0;
`;

export const ButtonLogout = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 3rem;
  background-color: #1e3a5f;
  border: none;
  color: #fff;
  border-radius: 50px;
  position: absolute;
  right: 16px;
  top: 10px;

  &:hover {
    cursor: pointer;
    background-color: #567b9c;
  }
`;
