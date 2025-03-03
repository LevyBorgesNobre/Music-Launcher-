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
     background: radial-gradient(circle, #343330, #595857);
     height: 100vh;
}

body, input, button{
    font-weight:normal;
}
`