import styled from 'styled-components';


export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 20px;
    background-image: linear-gradient( 135deg, #FDEB71 10%, #F8D800 100%);
    border-radius: 20px;
    box-shadow: 2px 5px #616160;
    color: nlack;
    text-transform: uppercase;
    font-family: 'Pacifico', cursive;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  
`

export const IconButton = styled(BaseButton)`
    min-width: 0px;
    width: 50px;
    padding: 0;

    &:hover {
      background-color: white;
      border: none;
    }
`
export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`
