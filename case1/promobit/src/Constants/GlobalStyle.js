import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    
    //    background: -webkit-linear-gradient(left, #18174d, #ceccdb);
    background-image: radial-gradient(circle at 50% -20.71%, #cfa8ff 0, #9d8bff 25%, #6c6cd8 50%, #3f4ea4 75%, #153375 100%);
        -- black ;
         -- black
        -- #ceccdb;
        -- #323232;
        -- #ceccdb;
        
    }

    ::-webkit-scrollbar-track {
    background-color: black
    ;
    }

    // ::-webkit-scrollbar {
    //     width: 6rem;
    //     background: black;
    // }

    // ::-webkit-scrollbar-thumb {
    //     background: pink;
    // }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; 
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        color: black
        ;
        ::-webkit-scrollbar {
        display: none;
        }
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
        
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`