import { ReactNode, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
import Amplitude from "amplitudejs"

export function Wrapper({children} : {children : ReactNode }){
    const jwt = localStorage.getItem('jwt')
    const navigate = useNavigate()
    useEffect(()=>{
      if(!jwt){
        navigate('/')
      }
    }, [jwt])
    const location = useLocation();

  useEffect(() => {
   if(location.pathname !== '/Playlist'){
    Amplitude.pause()}
  }, [location]);

    return(
      <>
        <main>{children}</main>
      </>
    )
}