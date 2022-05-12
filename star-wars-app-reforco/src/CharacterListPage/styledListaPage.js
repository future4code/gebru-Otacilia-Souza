



import styled from "styled-components"

export const FirstContainer = styled.div`
 background-image:url("https://image.api.playstation.com/vulcan/img/rnd/202105/1714/E5yFMXr7l18fVdXpdSWXp8Yi.png");

 img {
  
    margin-left:2%;
    width: 20%;
    height:100%;
   
  }

p {
    margin-left:8%;
    width: 10%;
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
    background-color: #757575;
    box-shadow: inset 0 0 1em #E0E0E0,0 0 1em #01579B;


text-align: center;
font-size: larger;
padding: 15px;
margin: 10px;
width:  300px;
&:hover{
    cursor:pointer;
    background: linear-gradient(#616161, #00838F, #0D47A1);
}

`
// export const caracter = styled.h1`
//    margin-left:35%;
//    text-align:center;
//     width: 30%;
//     height:100%;

// `;