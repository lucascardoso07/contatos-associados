import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-family: var(--font-worksans);
    }
    body{
        background-color: var(--zinc-1) ;
    }

    :root{

        /* ================== color ================== */

        --brand-1 : #FE3E01;
        --brand-2 : #FE3E50;

        --zinc-1: #131212;
        --zinc-2: #989494;
        --zinc-3: #E0E0E0;
    
        --white: #ffffff;
        --semi-white: #ffffff;

        /* ================== fonts ================== */

        --font-bebas:  'Bebas Neue', sans-serif;
        --font-worksans: 'Work Sans', sans-serif;
    }

`;
