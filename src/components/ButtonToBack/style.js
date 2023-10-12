import styled from "styled-components";

export const ButtonToBackStyle = styled.button`
  margin-top: 1rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e3a5f;
  border: none;
  color: #fff;
  border-radius: 50%;
  position: absolute;
  left: 16px;
  top: 10px;

  &:hover {
    cursor: pointer;
    background-color: #567b9c;
  }
`;
