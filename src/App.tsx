import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MusicProvider } from "./Contexts/MusicContext";

export function App() {
  const queryClient = new QueryClient()
  return(
   
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={ defaultTheme }>
          
        <BrowserRouter>
        <MusicProvider>
        <Router/>
       </MusicProvider>
        </BrowserRouter>
        <GlobalStyle/>
        </ThemeProvider>
    </QueryClientProvider>
  )
  
}

