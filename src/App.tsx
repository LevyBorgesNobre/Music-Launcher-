import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function App() {
  const queryClient = new QueryClient()
  return(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={ defaultTheme }>
        <BrowserRouter>
        <Router/>
        </BrowserRouter>
        <GlobalStyle/>
        </ThemeProvider>
    </QueryClientProvider>
  )
  
}

