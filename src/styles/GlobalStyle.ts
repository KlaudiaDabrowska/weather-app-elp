import { createGlobalStyle } from "styled-components";
import rainbow from "../assets/images/rainbow.jpg";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');
    *{ 
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html{
        height: 100vh;
    }

    body, a, button {
        font-family: 'Montserrat', sans-serif;
    }

    body{
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${rainbow});
        background-size: cover;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 97%;
        padding: ${({ theme }) => theme.spacing.xs};
        text-align: center;
        height: 97%;
    }
    
    :root {
        font-size:${({ theme }) => theme.fontSize.xs};
    }

`;
