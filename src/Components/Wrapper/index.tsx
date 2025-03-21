import { ReactNode, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function Wrapper({children} : {children : ReactNode }){
    const jwt = localStorage.getItem('jwt')
    const navigate = useNavigate()
    useEffect(()=>{
      if(!jwt){
        navigate('/')
      }
    }, [jwt])
    return(
      <>
        <main>{children}</main>
      </>
    )
}