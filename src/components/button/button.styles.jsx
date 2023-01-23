import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 3px 3px 10px -3px #000;
  color: black;
  text-transform: uppercase;
  font-family: "Pacifico", cursive;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconButton = styled(BaseButton)`
  min-width: 0px;
  width: 50px;
  padding: 0;
  box-shadow: 3px 3px 10px -3px #000;

  &:hover {
    background-color: white;
    border: none;
  }
`;
export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
