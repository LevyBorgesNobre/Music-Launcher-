import { ReactNode } from "react";
import { Header } from "./Header";

export const GlobalHeader = ({children} : {children : ReactNode } )=>{
    return(
        <div>
            <Header/>
            <main>{children}</main>
        </div>
    )
}