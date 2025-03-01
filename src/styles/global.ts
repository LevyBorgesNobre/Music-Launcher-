import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus{
    outline: 0;
}

body{
    background-color: linear-gradient(135deg, #343330, #595857);
}

body, input, button{
    font-weight:normal;
    font-size:2.1rem;
}
`