import { createGlobalStyle } from "styled-components";
import { bodyFont } from "./typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html {
        box-sizing:border-box;
        font-size:16px;
    }
    *,*:before,*:after{
        box-sizng:inherit;
    }
    body{
        margin:0;
        font-family:${bodyFont};
        padding:30px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }

    main {
        width: 90%;
        margin: 0 auto;
    }

`;
