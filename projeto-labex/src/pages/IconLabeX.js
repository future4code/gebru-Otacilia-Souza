import styled from "styled-components";
import { mainColors } from "./styledLabex";

const Title = styled.div`
    display: flex;
    margin: 60px 0;
    color: aquamarine;
    text-shadow: 0.1em 0.1em 0.2em black;
    
    .animationX {
        animation: zoom-back 4s infinite;
        color: ${mainColors.destaque};
    }
    @keyframes zoom-back {
        0% {
            transform: scale(1) rotate(0);
        }
        50%{
            transform: scale(2) rotate(180deg);
        }
        100% {
            transform: scale(1) rotate(0);
        }
    }
`

export default function IconLabeX() {
  return (
    <Title><h1>Labe</h1><h1 className="animationX" >X</h1></Title>
  )
}


