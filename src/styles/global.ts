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
     background:linear-gradient(180deg, #343330 0%, #595857 100%);;
     height: 100vh;
}

body, input, button{
    font-weight:normal;
}
`