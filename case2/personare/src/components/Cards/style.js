import styled from "styled-components";

export const CardContent = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 186px;
  padding: 20px;
  border-radius: 20px;
  :hover {
    transform: rotateY(180deg);
  }
`

export const Scene = styled.article`
  width: 200px;
  height: 450px;
  perspective: 600px;
    
  .is-flipped {
    transform: rotateY(180deg);
  }
  .card__face--front {
    transform: rotateY( 180deg );
    
    border-radius: 20px;
    img {
      width: 162px;
      display: block;
      margin: auto;
    }
  }
  .card__face--back {
    img {
      width: 100%;
      height: 100%;
    }
  }
`

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  :hover {
    transform: rotateY(180deg);
  }
`

export const CardFace = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
`;

export const CardInfo = styled.div`
  border: 1px solid black;
  padding: 20px;
  background-color:#FFEC8B;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: center;
  hr {
    border-color: black;
  }
`

export const CardName = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
`

export const CardDescription = styled.div`
  margin-top: 1px;
  `
