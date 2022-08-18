import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(p) => p.theme["green-500"]};
    }

    body {
        background-color: ${(p) => p.theme["gray-800"]};
        color: ${(p) => p.theme["gray-100"]};
    }

    body, input, textarea, button {
        font: 400 1rem Roboto, sans-serif;
    } 
`;
