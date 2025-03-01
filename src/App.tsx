import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";

export function App() {
  
  return(
   <ThemeProvider theme={ defaultTheme }>
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
    <GlobalStyle/>
   </ThemeProvider>
  )
  
}

