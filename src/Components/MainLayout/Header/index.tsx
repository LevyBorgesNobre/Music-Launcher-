import MLauncherLogo from '../../../images/Logo.svg'
import { ButtonsContainer, Div, HeaderButton, LogoutButton } from './styles'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export function Header(){
    
    const location = useLocation()
    const navigate = useNavigate()
    
    function removeJwt(){
        localStorage.removeItem('jwt')
        if(!localStorage.getItem('jwt')){
            navigate('/')
        }
    }

    return(
       <Div>
       <img src={MLauncherLogo} alt="Logo do site" />
       <ButtonsContainer>
        {location.pathname === '/Home' || location.pathname === '/Playlist' ? <LogoutButton onClick={()=>{removeJwt()}}>Logout</LogoutButton> : null }
        {location.pathname ==='/Home' ? <HeaderButton onClick={()=>{navigate('Playlist')}}>MINHA PLAYLIST</HeaderButton> : null }
        {location.pathname === '/Playlist' ? <HeaderButton onClick={()=>{navigate('/Home')}}>Home</HeaderButton> : null}
        </ButtonsContainer>
       </Div>
    )
}