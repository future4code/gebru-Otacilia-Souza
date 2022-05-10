



import styled from "styled-components"

export const FirstContainer = styled.div`
align-items: center;
 padding: 4rem 2rem 2rem;
 background: linear-gradient(#663300, #996633, #999966);
 box-shadow: inset 0 0 1em black,0 0 1em black ;

 img {
  
    margin-left:40%;
    width: 20%;
    height:100%;
   
  }

p {
    margin-left:8%;
    width: 40%;
    height:100%;
    font-size: x-large;
    color: azure;
   
}

`;
export const FirstTitle = styled.h1`
text-align: center;
color: azure;
`;



export const CharacterCard = styled.div`
    border-radius: 6px;
    background-color: #996633;
    box-shadow: inset 0 0 1em #663300,0 0 1em #996633;

text-align: center;
font-size: larger;
padding: 10px;
margin: 10px;
width:  300px;
&:hover{
    cursor:pointer;
    background: linear-gradient(#663300, #996633, #999966);
}

`
export const caracter = styled.h1`
   margin-left:35%;
   text-align:center;
    width: 30%;
    height:100%;

`;